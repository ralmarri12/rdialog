function inheritPrototype(childObject, parentObject) {
    var copyOfParent = Object.create(parentObject.prototype);
    copyOfParent.constructor    = childObject;
    childObject.prototype       = copyOfParent;
}

var RDialog = function(title, content)
{
    this.title      = title;
    this.content    = '<p>' + content + '</p>';
    this.status     = false;
    this.output     = $('<div class="rdialog_overlay"></div>');
}

RDialog.prototype = {
    constructor: RDialog,
    get_content: function(){
        return this.content;
    },
    prepare_output: function(){
        wrap            = $('<div class="rdialog_wrap"></div>');
        titlization     = $('<div class="rdialog_title">' + this.title + '<span class="rdialog_title__x_button">x</span></div>');
        contentization  = $('<div class="rdialog_content">' + this.get_content() + '</div>');
        wrap.append(titlization);
        wrap.append(contentization);
        this.output.append(wrap);
    },
    run: function(){
        this.prepare_output();

        this.status = true;
        $('body').append(this.output);

        $('.rdialog_overlay').click(function(event){
            // if(event.target == $('.model'))
            if($(event.target).attr('class') == 'rdialog_overlay')
            {
                $('.rdialog_overlay').hide();
            }

        });

        $('.rdialog_title__x_button').click(function(event){
            this.status = false;
            $('.rdialog_overlay').hide();
        });

        this.after_run();
    },
    after_run: function(){
        return undefined;
    },
    callback: function(){
        return undefined;
    }
}

var RDialog_ok = function(title, content, callback)
{
    RDialog.call(this, title, content);
    this.content = this.content + '<div class="rdialog_controllers"><button class="ok_btn">Ok</button></div>';
    this.callback = callback;
}

inheritPrototype(RDialog_ok, RDialog);

RDialog_ok.prototype.after_run = function()
{
    var callback = this.callback;
    $('.ok_btn').click(function(event){
        callback();
        $('.rdialog_overlay').hide();
    });

    $('.close').click(function(event){
        $('.rdialog_overlay').hide();
    });
}


var RDialog_confirm = function(title, content, callback ,ok = 'Confirm', cancel = 'Cancel')
{
    var copy_content = content;
    RDialog_ok.call(this, title, content, callback);
    this.content = copy_content;
    this.content = this.content + '<div class="rdialog_controllers"><button class="ok_btn confirm_btn">' + ok + '</button><button class="cancel_btn close">' + cancel + '</button></div>';
}

inheritPrototype(RDialog_confirm, RDialog_ok);

// Usage:
// testDialog = new RDialog_confirm('System Dialog', 'My content',function(){
//     console.log('callback works !!');
// }, 'Yes Do it!', 'Oh nah!');
// testDialog.run();
