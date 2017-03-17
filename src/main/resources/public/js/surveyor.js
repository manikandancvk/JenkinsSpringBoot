function initializeListeners() {
  listenSOIM() ;
  listenSOIMUnit() ;
  listenAcre() ;
}

function generateBoundaryReport() {

  var formattedDate = formatDate ( new Date( $("#inDate").val() ) , "DD.MM.YYYY" ) ;
  var check = moment(  formattedDate , "DD.MM.YYYY");
  var recordNo = check.format('YYYY')+"/"+check.format('MM');
  var dataModel = {
    inDate : formattedDate ,
    inClientName : $("#inClientName").val() ,
    inSurveyNumber : $("#inSurveyNumber").val() ,
    inVillage : $("#inVillage").val() ,
    inNatureOfWork : $("#inNatureOfWork option:selected").text() ,
    inStatus : $(":radio[name=inStatus]:checked").val() ,
    inSurveyorName : $("#inSurveyorName").val() ,
    inJnSurveyorName : $("#inJnSurveyorName").val() ,
    inFileNumber : $("#inFileNumber").val() ,
    siomCornerMeasure : $("#siomCornerMeasure").text() ,
    siomNorthMeasure : $("#siomNorthMeasure").text() ,
    siomSouthMeasure : $("#siomSouthMeasure").text() ,
    siomEastMeasure : $("#siomEastMeasure").text() ,
    siomWestMeasure : $("#siomWestMeasure").text() ,
    siomCornerMeasureFMB : $("#siomCornerMeasureFMB").text() ,
    siomNorthMeasureFMB : $("#siomNorthMeasureFMB").text() ,
    siomSouthMeasureFMB : $("#siomSouthMeasureFMB").text() ,
    siomEastMeasureFMB : $("#siomEastMeasureFMB").text() ,
    siomWestMeasureFMB : $("#siomWestMeasureFMB").text() ,
    inAcreFmb : $("#inAcreFmb").val() ,
    inAcre : $("#inAcre").val() ,
    insmCalFMB : $("#smCalFMB").val() ,
    insmCalField : $("#smCalField").val() ,
    inRecordNumber : recordNo
  }

  console.log(" data to generate :"+JSON.stringify( dataModel ) ) ;
  sessionStorage.setItem( "surveyData" , JSON.stringify( dataModel ) ) ;
  openInNewTab( "boundaryTemplate.html") ;
}

function formatDate( timeInMilliSeconds , formatTemplate ) {
  var readableTime = moment(new Date(Number(timeInMilliSeconds))).format(formatTemplate) ;
  return readableTime ;
}


function setValueInCookie( propertyName , propertyValue ) {
  $.cookie( propertyName , propertyValue , { expires: 90 , path: '/' });
}

function getValueFromCookie( propertyName ) {
  return $.cookie( propertyName ) ;
}

function listenSOIM() {
  $(".soim").on("change paste keyup", function() {
   var text = $(this).val() ;
   if( text.trim().length > 0 ) {
     var textArr = text.split("+") ;
     var total = 0 ;
     for (var i = textArr.length - 1; i >= 0; i--) {
       total = total + Number( textArr[i] ) ;
     }
     $(this).parent().next().children().text( total +" " +$("#soimUnit option:selected").text() ) ;
   } else {
      $(this).parent().next().children().text( "" ) ;
   }

  });

  $(".soimFMB").on("change paste keyup", function() {
   var text = $(this).val() ;
   if( text.trim().length > 0 ) {
    var textArr = text.split("+") ;
    var total = 0 ;
    for (var i = textArr.length - 1; i >= 0; i--) {
       total = total + Number( textArr[i] ) ;
    }
    $(this).parent().next().children().text( total +" " + $("#soimFMBUnit option:selected").text() ) ;
   } else {
      $(this).parent().next().children().text( "" ) ;
   }

  });
}


function listenSOIMUnit() {
  $("#soimUnit").change(function() {
    $(".soim").each(function( index ) {
      var valuePresent = $(this).parent().next().children().text() ;
      if( valuePresent.trim().length > 0 ) {
        var valueChanged = valuePresent.split(" ")[0] + " "+ $("#soimUnit option:selected").text() ;
        $(this).parent().next().children().text( valueChanged ) ;
      }
    });
  });
  $("#soimFMBUnit").change(function() {
      $(".soimFMB").each(function( index ) {
      var valuePresent = $(this).parent().next().children().text() ;
      if( valuePresent.trim().length > 0 ) {
        var valueChanged = valuePresent.split(" ")[0] + " "+ $("#soimFMBUnit option:selected").text() ;
        $(this).parent().next().children().text( valueChanged ) ;
      }
    });
  });
}


function listenAcre() {
  $(".acreCalField").on("change paste keyup", function() {
     var text = $(this).val() ;
     var fmtValue = parseFloat ( (Number( text ) * 4046.825 ).toFixed(5))
     $("#smCalField").val( fmtValue ) ;
  });
  $(".acreCalFMB").on("change paste keyup", function() {
     var text = $(this).val() ;
     var fmtValue = parseFloat ( (Number( text ) * 4046.825 ).toFixed(5))
     $("#smCalFMB").val( fmtValue ) ;
  });
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
