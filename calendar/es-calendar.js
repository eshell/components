/**
 * Created by erics on 3/9/2016.
 */
(function(){
    
angular.module('esCalendar',[]);
angular.module('esCalendar').factory('$esCalendar',Calendar);

function Calendar(){
    var weekdays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var date = new Date();

    var display = {
        weekdays: weekdays,
        days:[]
    };

    var info = {};

    init();

    return {
        date:date,
        display:display,
        setDate:setDate
    };


    function setDate(m,d,y){
        date = new Date(y,m,d);
        init();
    }

    function init(){
        info = {
            month: date.getMonth()+1,
            day: date.getDate(),
            year: date.getFullYear(),

            daysInMonth: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
            startPad: new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
            endPad: 7-(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() + 1)
        };

        for(var i = 1; i <= info.startPad; i++){
            display.days.push(0);
        }
        for(var i = 1;i <= info.daysInMonth; i++){
            display.days.push(i);
        }
        for(var i = 1; i <= info.endPad; i++){
            display.days.push(0);
        }

    }


}


})();
