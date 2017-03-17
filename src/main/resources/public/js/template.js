function bindData() {
  var surveyDataStr = sessionStorage.getItem("surveyData") ;
  console.log(" surveyDataStr :"+surveyDataStr ) ;
  var surveyData = $.parseJSON( surveyDataStr ) ;
  console.log(" date :"+surveyData.inDate ) ;

  $("#inDate").text( surveyData.inDate ) ;
  $("#inClientName").text( surveyData.inClientName ) ;
  $("#inSurveyNumber").text( surveyData.inSurveyNumber ) ;
  $("#inVillage").text( surveyData.inVillage ) ;
  $("#inNatureOfWork").text( surveyData.inNatureOfWork ) ;
  $("#inStatus").text( surveyData.inStatus ) ;
  $("#inSurveyorName").text( surveyData.inSurveyorName ) ;
  $("#inJnSurveyorName").text( " & "+surveyData.inJnSurveyorName ) ;
  $("#inFileNumber").text( surveyData.inFileNumber ) ;
  $("#inSurveyDate").text( surveyData.inDate ) ;
  $("#inRecordNumber").text( surveyData.inRecordNumber ) ;
  $("#siomWestMeasure").text( getValueMeasure ( surveyData.siomWestMeasure ) ) ;
  $("#siomCornerMeasure").text( getValueMeasure ( surveyData.siomCornerMeasure ) ) ;
  $("#siomNorthMeasure").text( getValueMeasure ( surveyData.siomNorthMeasure ) ) ;
  $("#siomSouthMeasure").text( getValueMeasure ( surveyData.siomSouthMeasure ) ) ;
  $("#siomEastMeasure").text( getValueMeasure ( surveyData.siomEastMeasure ) ) ;
  $("#siomWestMeasureFMB").text( getValueMeasure ( surveyData.siomWestMeasureFMB ) ) ;
  $("#siomCornerMeasureFMB").text( getValueMeasure ( surveyData.siomCornerMeasureFMB ) ) ;
  $("#siomNorthMeasureFMB").text( getValueMeasure ( surveyData.siomNorthMeasureFMB ) ) ;
  $("#siomSouthMeasureFMB").text( getValueMeasure ( surveyData.siomSouthMeasureFMB ) ) ;
  $("#siomEastMeasureFMB").text( getValueMeasure ( surveyData.siomEastMeasureFMB ) ) ;
  $("#inAcreFmb").text( getValueMeasure ( surveyData.inAcreFmb ) ) ;
  $("#inAcre").text( getValueMeasure ( surveyData.inAcre ) ) ;
  $("#insmCalFMB").text( "( "+getValueMeasure ( surveyData.insmCalFMB )+" ) " ) ;
  $("#insmCalField").text( "( "+getValueMeasure ( surveyData.insmCalField )+" ) " ) ;

}


function getValueMeasure( value ) {
  var fmtValue = "---------------" ;
  if( typeof value !== "undefined" && value !== null  ) {
    if( value.trim().length > 0 ) {
      fmtValue = value ;
    }
  }
  return fmtValue ;
}

function printPage() {
  $(".button").remove();
  window.print();
}
