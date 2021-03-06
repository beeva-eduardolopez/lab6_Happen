
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

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function nth(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }

}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function dateWithSecondsWithOutAMPM() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    return h + ":" + m + ":" + s ;
}

function dateWithSeconds() {
    var d = new Date();
    var h = (d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var ampm = (h >= 12) ? "PM" : "AM";
    return h + ":" + m + ":" + s + " " + ampm;
}

function dateWithOutSeconds() {
    var d = new Date();
    var h = (d.getHours());
    var m = addZero(d.getMinutes());
    var ampm = (h >= 12) ? "PM" : "AM";
    return h + ":" + m + " " + ampm;
}

Date.prototype.getWeek = function () {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}


var library = (function () {
    return {
        TimeStamp: (function () {
            return {
                UnixTimestamp: function () {
                    var date = new Date();
                    var unixTSM = String(date.getTime());
                    return unixTSM.substr(0, unixTSM.length - 3);
                },
                UnixMillisecond: function () {
                    var date = new Date();
                    var unixTSM = date.getTime();
                    return String(unixTSM);

                }
            }
        })(),
        Local: (function () {
            return {
                Time: (function () {
                    return {
                        WithSeconds: function () {
                            var date = new Date();
                            var dateWS = dateWithSeconds(date);
                            return String(dateWS);
                        },
                        WithOutSeconds: function () {
                            var date = new Date();
                            var dateWOS = dateWithOutSeconds(date);
                            return String(dateWOS);
                        }
                    }
                })(),
                MDY: (function () {
                    return {
                        Numeral: function () {
                            var date = new Date();
                            var day = date.getDay() - 1;
                            var month = date.getMonth() + 1;
                            var year = date.getFullYear();
                            return month + "/" + day + "/" + year;

                        },
                        Name: function () {

                            var date = new Date();
                            var day = date.getDay() - 1;
                            var month = date.getMonth();
                            var monthNa = monthName[month]
                            var year = date.getFullYear();
                            return monthNa + " " + day + ", " + year;
                        }
                    }
                })(),
            }
        })(),
        Second: (function () {
            return {
                Second: function () {
                    var date = new Date();
                    var seconds = date.getSeconds();
                    return String(seconds);
                },
                DblDigit: function () {
                    var date = new Date();
                    var seconds = date.getSeconds();
                    return String(addZero(seconds));
                }
            }
        })(),
        Minute: (function () {
            return {
                Minute: function () {
                    var date = new Date();
                    var minute = date.getMinutes();
                    return String(minute);
                },
                DblDigit: function () {
                    var date = new Date();
                    var minute = date.getMinutes();
                    return String(addZero(minute));
                }
            }
        })(),
        Hour: (function () {
            return {
                TwentyFourHour: function () {
                    var date = new Date();
                    var hours = date.getHours();
                    return String(hours);
                },
                TwelveHour: function () {
                    var date = new Date();
                    var hours = date.getHours();
                    if (hours > 12) {
                        hours -= 12;
                    } else if (hours === 0) {
                        hours = 12;
                    }
                    return String(hours);

                },
                AMPM: (function () {
                    return {
                        UpperCase: function () {
                            var date = new Date();
                            var hours = date.getHours();
                            var ampm = (hours >= 12) ? "PM" : "AM";
                            return ampm;
                        },
                        LowerCase: function () {
                            var date = new Date();
                            var hours = date.getHours();
                            var ampm = (hours >= 12) ? "pm" : "am";
                            return ampm;
                        }
                    }
                })()
            }
        })(),
        Week: (function () {
            return {
                DayOfWeek: function () {
                    var date = new Date();
                    var day = date.getDay();
                    var dayName = weekday[day];
                    return dayName;
                },
                AbrDayOfWeek: function () {
                    var date = new Date();
                    var day = date.getDay();
                    var dayName = weekday[day];
                    var twoLettersDay = dayName.substr(0, 3);
                    return twoLettersDay;
                },
                FirstTwoOfWeek: function () {
                    var date = new Date();
                    var day = date.getDay();
                    var dayName = weekday[day];
                    var twoLettersDay = dayName.substr(0, 2);
                    return twoLettersDay;
                },
                WeekOfYear: function () {
                    var date = new Date();
                    var week = date.getWeek();
                    return String(week);
                }
            }
        })(),
        Month: (function () {
            return {
                DateOfMonth: (function () {
                    return {
                        Numeral: function () {
                            var date = new Date();
                            var numberDateMonth = date.getDate();
                            return String(numberDateMonth);
                        },
                        Ordinal: function () {
                            var date = new Date();
                            var numberDateMonth = date.getDate();
                            var ord = nth(numberDateMonth);
                            return String(numberDateMonth + ord);
                        },
                        DateDblDigit: function () {
                            var date = new Date();
                            var twoDigitDate = ((date.getDate()) >= 10) ? (date.getDate()) : '0' + (date.getDate());
                            return String(twoDigitDate);
                        }
                    }
                })(),
                MonthNumber: function () {
                    var date = new Date();
                    var month = date.getMonth() + 1;
                    return String(month);
                    //return String(new Date().getMonth()+1);
                },
                MonthNumberDblDigit: function () {
                    var date = new Date();
                    var month = date.getMonth() + 1;
                    return String(addZero(month));
                },
                AbrOfCurrentMonth: function () {

                    var date = new Date();
                    var month = date.getMonth();
                    var monthN = monthName[month];
                    return monthN.substr(0, 3);

                },
                CurrentMonth: function () {
                    var date = new Date();
                    var month = date.getMonth();
                    var monthN = monthName[month];
                    return monthN;
                }
            }
        })(),
        Year: (function () {
            return {
                DayOfYear: (function () {
                    return {
                        Numeral: function () {
                            var date = new Date();
                            var start = new Date(date.getFullYear(), 0, 0);
                            var diff = date - start;
                            var oneDay = 1000 * 60 * 60 * 24;
                            var day = Math.floor(diff / oneDay);
                            return String(day);
                        },
                        Ordinal: function () {
                            var date = new Date();
                            var start = new Date(date.getFullYear(), 0, 0);
                            var diff = date - start;
                            var oneDay = 1000 * 60 * 60 * 24;
                            var day = Math.floor(diff / oneDay);
                            var ord = nth(day);
                            return String(day + ord);
                        }
                    }
                })(),
                YearFull: function () {
                    var date = new Date();
                    var year = date.getFullYear();
                    return String(year);
                },
                YearAbr: function () {
                    var date = new Date();
                    var year = String(date.getFullYear());
                    var yearAbr = year.substr(year.length - 2);
                    return String(yearAbr);
                }
            }
        })(),
        Defaults: function () {
            var date = new Date();
            var day = addZero(date.getDay() - 1);
            var month = addZero(date.getMonth() + 1);
            var year = date.getFullYear();
            var dateWS = dateWithSecondsWithOutAMPM(date);
            return year+"-"+month+"-"+day+"T"+dateWS;
        }
    }
})();