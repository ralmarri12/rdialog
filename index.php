<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Testing overlay-modal</title>
        <link rel="stylesheet" href="assists/css/style.css">
    </head>
    <body>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <script type="text/javascript" src="assists/js/jquery.js"></script>
        <script type="text/javascript" src="assists/js/rdialog.js"></script>



        <script>

        testDialog = new RDialog('System Dialog', 'My content',function(){
            console.log('callback works !!');
        });

        testDialog.run();

        </script>

    </body>
</html>
