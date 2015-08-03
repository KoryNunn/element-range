module.exports = function(element, doc) {
    if(!doc){
        doc = document;
    }

    var range,
        bad = doc.body.createTextRange;

    if (bad) {
        range = doc.body.createTextRange();
        range.moveToElementText(element);
    } else {
        range = doc.createRange();
        range.selectNodeContents(element);
    }

    return {
        range: range,
        select: function(){
            if(bad){
                range.select();
            }else{
                var selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
    };
};