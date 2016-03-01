
var monthName = new Array();
monthName[0] = "January";
monthName[1] = "February";
monthName[2] = "March";
monthName[3] = "April";
monthName[4] = "May";
monthName[5] = "June";
monthName[6] = "July";
monthName[7] = "August";
monthName[8] = "September";
monthName[9] = "October";
monthName[10] = "November";
monthName[11] = "December";

var monthNameAbr = new Array();
monthNameAbr[0] = "Jan";
monthNameAbr[1] = "Feb";
monthNameAbr[2] = "Mar";
monthNameAbr[3] = "Apr";
monthNameAbr[4] = "May";
monthNameAbr[5] = "Jun";
monthNameAbr[6] = "Jul";
monthNameAbr[7] = "Aug";
monthNameAbr[8] = "Sep";
monthNameAbr[9] = "Oct";
monthNameAbr[10] = "Nov";
monthNameAbr[11] = "Dec";

function nth(d) {
  if(d>3 && d<21) return 'th'; 
  switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }

}


var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){},
		UnixMillisecond: function(){}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){},
			DblDigit: function(){}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){},
			DblDigit: function(){}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {},
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){},
					LowerCase: function(){}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){},
			AbrDayOfWeek: function(){},
			FirstTwoOfWeek: function(){},
			WeekOfYear: function(){}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
                        var date = new Date();
                        var numberDateMonth = date.getDate();
                        return String(numberDateMonth);
                    },
					Ordinal: function(){
                        var date = new Date();
                        var numberDateMonth = date.getDate();
                        var ord = nth(numberDateMonth);
                        return String(numberDateMonth+ord);
                    },
					DateDblDigit: function(){
                        var date = new Date();
                        var twoDigitDate=((date.getDate())>=10)? (date.getDate()) : '0' + (date.getDate());
                        return String (twoDigitDate);
                    }
				}
			})(),
			MonthNumber: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                return String (month);
                //return String(new Date().getMonth()+1);
            },
			MonthNumberDblDigit: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                return month < 10 ? '0' + month : '' + month;
            },
			AbrOfCurrentMonth: function(){
                var date = new Date();
                var month = date.getMonth();
                var abrMonth = monthNameAbr[month];
                return abrMonth;
                
            },
			CurrentMonth: function(){
                var date = new Date();
                var month = date.getMonth();
                var monthN = monthName[month];
                return monthN;
            }
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
                        var date = new Date();
                        var start = new Date(date.getFullYear(), 0, 0);
                        var diff = date - start;
                        var oneDay = 1000 * 60 * 60 * 24;
                        var day = Math.floor(diff / oneDay);
                        return String(day);
                    },
					Ordinal: function(){
                        var date = new Date();
                        var start = new Date(date.getFullYear(), 0, 0);
                        var diff = date - start;
                        var oneDay = 1000 * 60 * 60 * 24;
                        var day = Math.floor(diff / oneDay);
                        var ord = nth(day);
                        return String(day+ord);
                    }
				}
			})(),
			YearFull: function(){
                var date = new Date();
                var year = date.getFullYear();
                return String (year);
            },
			YearAbr: function(){
                var date = new Date();
                var year = String(date.getFullYear());
                var yearAbr = year.substr(year.length-2);
                return String (yearAbr);
            }
		}
	})(),
	Defaults: function(){}
  }
})();