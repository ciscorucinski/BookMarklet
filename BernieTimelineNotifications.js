/**
 * Created by Christopher on 3/14/2016.
 */

javascript: (function () {

    var isTesting = false;
    var isFirst = true;
    var isIssuePresent = false;

    var click = function () {
        clickMenuItem("see_first");
        clickMenuItem("on");
        if (!isIssuePresent) {
            bookmarkletCompleted();
        }

    };
    var clickMenuItem = function (value) {
        var result = document.querySelectorAll('[data-value="' + value + '"]');
        if (isTesting) {
            resultSize(result);
        }
        if (result.length === 2) {
            for (var i = 0; i < result.length; i++) {
                result[i].click();
            }
        } else {
            isIssuePresent = true;
            if (isFirst) {
                wrongPage();
            }
        }
        isFirst = false;
    };
    var summary = function () {
        alert("Summary\n\nWhat this bookmarklet will do is... \n\n1. Make sure you see Bernie Sander posts first on Facebook. \n2. Make sure you get all notifications for every single Bernie Sanders post.");
    };
    var bookmarkletCompleted = function () {
        alert("This bookmarklet has completed its work. \n\nYou will now get every single notification for Bernie Sanders' Facebook posts, and they will be displayed first on your timeline!");
    };
    var wrongPage = function () {
        alert("WRONG PAGE!\n\nPlease make sure you are on Bernie Sander's Facebook Timeline\n\nhttps://www.facebook.com/berniesanders/");
    };
    var resultSize = function (list) {
        alert("result size = " + list.length);
    };

    click();

})();
