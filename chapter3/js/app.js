var theRef = new Firebase('https://basedemo.firebaseio.com/products');

var prodData = {};


theRef.on('value', function(snap) {

    prodData = snap.val();
    
    $.each(prodData, function(index, value) {
        var prodPreview = '<div class="row">';
        
        prodPreview += '<div class="col-md-3 prodListHeader">';    
        prodPreview += '<h2>' + value.name + '</h2>';
        prodPreview += '</div>';
        
        prodPreview += '<div class="col-md-3 prodListHeader">';
        prodPreview += '<h2>$' + value.price + '</h2>';
        prodPreview += '</div>';
        
        prodPreview += '</div>';
        
        
        prodPreview += '<div class="row">';
        
        prodPreview += '<div class="col-md-3 picFix">';
        if (value.image == 'NONE') {
            prodPreview += '<img alt="No Pic">';
        } else {
            prodPreview += '<img src=' + value.image + '>';
        }
        prodPreview += '</div>';
        
        
        prodPreview += '<div class="col-md-3">';
        prodPreview += '<p>' + value.description + '</p>';
        prodPreview += '</div>';
        prodPreview += '</div>';
        
        
        prodPreview += '<div class="row spacer">';
        prodPreview += '</div>';
        
        $(prodPreview).appendTo('#main');

    
    });

}, function(errorObject) {
    
console.log('The read failed: ' + errorObject.code);  

});