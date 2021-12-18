    var today = new Date();  
    var currYearTxt = document.querySelector('.currYear');
    var currMonthTxt = document.querySelector('.currMonth');
    var currDayTxt = document.querySelector('.currDay');
    var currDay = today.getDate();
    var currMonth = today.getMonth();
    var currYear = today.getFullYear();
    var monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'];
    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var maxMonth = monthes.length;
    var maxWeekDays = weekDays.length;
    var currWeekDay = today.getDay();
    var tableTbody = document.querySelector('.table');
    
    
    for (var i = 0; i < maxMonth;  i++) {
        //currMonthTxt.textContent = monthes[currMonth];
        
    }
    for (var i = 0; i < maxWeekDays;  i++) {
        
        if (currWeekDay === 0) {
            currWeekDay = 0;
        }
       
          currDayTxt.textContent = monthes[currMonth] + ' ' + currDay + ' ' + weekDays[currWeekDay];     
        
    }
    var firstDay = (new Date(currYear, currMonth, 1));
    var firstDayWeek = firstDay.getDay();
    var next;

    //currYearTxt.textContent = currYear + ' year';
   
    var t = firstDayWeek;
    if ( t < 0 ) {
        t = 6;
    }

    function createTable() {     
        
        var a = 0;
        
        while (firstDay.getMonth() == currMonth) {
            var tr = document.createElement('tr'); 
            var i = 0;              
            while (i < 7  ) {
                    var td = document.createElement('td');                                  
                    if (a == 0) {                     
                        if (i < t) {
                            td.innerHTML = ' ';
                        } else {
                            td.innerHTML = firstDay.getDate();
                            firstDay.setDate(firstDay.getDate() + 1);
                        }
                    } else {                                          
                            if ( next > currMonth) {

                                break;
                            }
                            td.innerHTML = firstDay.getDate();                
                            firstDay.setDate(firstDay.getDate() + 1);
                            next = firstDay.getMonth(); 
                    }                             
                    tr.appendChild(td);
                    i++; 
                    }                            
            tableTbody.appendChild(tr);
            a++;          
        }      
    }

    document.td.classList.add('pixel');
    document.tr.classList.add('pixel');



