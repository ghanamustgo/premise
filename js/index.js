
var $cache = {

};
var calendar = $("#calendar").calendar(
    {
        tmpl_path: "/testingmic/premise/tmpls/",
        events_source: function () { return []; }
    });

var datetimePicker1 = $('#datetimepicker1').datetimepicker(),
    datetimePicker2 = $('#datetimepicker3').datetimepicker(),
    datetimePicker2 = $('#datetimepicker2').datetimepicker();



$("#save-hours").on("click", function(){
    //Check if datetimePicker2-datetimePicker2 < 24hrs
});

$( document ).ready(function() {

});