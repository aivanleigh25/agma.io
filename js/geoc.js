(function () {
  if (typeof(Storage) !== "undefined" && localStorage.contAg == null) {
    getCnt(function (continent) {
      !continent && (continent = '?');
      localStorage.setItem("contAg", continent);
      connectDefault(continent);
    });
  }
  function getCnt(cb) {
    var numb = 3;
    switch (numb) {
      /* --- ipinfo.io gives often error 'Too many requests'
      case 1:
        $.get("http://ipinfo.io", function(data) {
          //console.log('ipinfo.io');
          var country = data.country;
          //console.log(country);
          var continent = country_to_continent(country);
          //console.log('continent is1 : ' + continent);
          cb(continent);
        }, "jsonp");
        break;
      */
      /* --- www.geoplugin.net doesn't work on https
      case 2:
        $.getJSON("http://www.geoplugin.net/json.gp?jsoncallback=?", function(data) {
          var country = data.geoplugin_countryCode;
          //console.log(country);
          var continent = country_to_continent(country);
          //console.log('geoContinentCode is2 ' + continent);
          cb(continent);
        });
        break;
      */
      case 3:
        $.getJSON("https://ip.zxq.co/", function(data) {
          var country = data.country;
          //console.log(country);
          var continent = country_to_continent(country);
          //console.log('continent is ' + continent);
          cb(continent);
        });
        break;
      /* --- ip-api.com doesn't work on https
      case 4:
        $.getJSON("http://ip-api.com/json/",function(data){
          var country = data.countryCode;
          //console.log(country);
          var continent = country_to_continent(country);
          //console.log('continent is 4 ' + continent);
          cb(continent);
        });
        break;
      */
      /* --- freegeoip.net doesn't work anymore (CORS-request fails because of Cross-Origin Policy)
      case 5:
        $.getJSON("http://freegeoip.net/json/",function(data){
          var country = data.country_code;
          //console.log(country);
          var continent = country_to_continent(country);
          //console.log('continent is 5 ' + continent);
          cb(continent);
        });
        break;
      */
      default:
        //console.log('default');
    }
  }
  function country_to_continent(country){
    var continent = '';
    switch (country) {
      case 'AF': continent = 'AS'; break;
      case 'AX': continent = 'EU'; break;
      case 'AL': continent = 'EU'; break;
      case 'DZ': continent = 'AF'; break;
      case 'AS': continent = 'OC'; break;
      case 'AD': continent = 'EU'; break;
      case 'AO': continent = 'AF'; break;
      case 'AI': continent = 'NA'; break;
      case 'AQ': continent = 'AN'; break;
      case 'AG': continent = 'NA'; break;
      case 'AR': continent = 'SA'; break;
      case 'AM': continent = 'AS'; break;
      case 'AW': continent = 'NA'; break;
      case 'AU': continent = 'OC'; break;
      case 'AT': continent = 'EU'; break;
      case 'AZ': continent = 'AS'; break;
      case 'BS': continent = 'NA'; break;
      case 'BH': continent = 'AS'; break;
      case 'BD': continent = 'AS'; break;
      case 'BB': continent = 'NA'; break;
      case 'BY': continent = 'EU'; break;
      case 'BE': continent = 'EU'; break;
      case 'BZ': continent = 'NA'; break;
      case 'BJ': continent = 'AF'; break;
      case 'BM': continent = 'NA'; break;
      case 'BT': continent = 'AS'; break;
      case 'BO': continent = 'SA'; break;
      case 'BA': continent = 'EU'; break;
      case 'BW': continent = 'AF'; break;
      case 'BV': continent = 'AN'; break;
      case 'BR': continent = 'SA'; break;
      case 'IO': continent = 'AS'; break;
      case 'VG': continent = 'NA'; break;
      case 'BN': continent = 'AS'; break;
      case 'BG': continent = 'EU'; break;
      case 'BF': continent = 'AF'; break;
      case 'BI': continent = 'AF'; break;
      case 'KH': continent = 'AS'; break;
      case 'CM': continent = 'AF'; break;
      case 'CA': continent = 'NA'; break;
      case 'CV': continent = 'AF'; break;
      case 'KY': continent = 'NA'; break;
      case 'CF': continent = 'AF'; break;
      case 'TD': continent = 'AF'; break;
      case 'CL': continent = 'SA'; break;
      case 'CN': continent = 'AS'; break;
      case 'CX': continent = 'AS'; break;
      case 'CC': continent = 'AS'; break;
      case 'CO': continent = 'SA'; break;
      case 'KM': continent = 'AF'; break;
      case 'CD': continent = 'AF'; break;
      case 'CG': continent = 'AF'; break;
      case 'CK': continent = 'OC'; break;
      case 'CR': continent = 'NA'; break;
      case 'CI': continent = 'AF'; break;
      case 'HR': continent = 'EU'; break;
      case 'CU': continent = 'NA'; break;
      case 'CY': continent = 'AS'; break;
      case 'CZ': continent = 'EU'; break;
      case 'DK': continent = 'EU'; break;
      case 'DJ': continent = 'AF'; break;
      case 'DM': continent = 'NA'; break;
      case 'DO': continent = 'NA'; break;
      case 'EC': continent = 'SA'; break;
      case 'EG': continent = 'AF'; break;
      case 'SV': continent = 'NA'; break;
      case 'GQ': continent = 'AF'; break;
      case 'ER': continent = 'AF'; break;
      case 'EE': continent = 'EU'; break;
      case 'ET': continent = 'AF'; break;
      case 'FO': continent = 'EU'; break;
      case 'FK': continent = 'SA'; break;
      case 'FJ': continent = 'OC'; break;
      case 'FI': continent = 'EU'; break;
      case 'FR': continent = 'EU'; break;
      case 'GF': continent = 'SA'; break;
      case 'PF': continent = 'OC'; break;
      case 'TF': continent = 'AN'; break;
      case 'GA': continent = 'AF'; break;
      case 'GM': continent = 'AF'; break;
      case 'GE': continent = 'AS'; break;
      case 'DE': continent = 'EU'; break;
      case 'GH': continent = 'AF'; break;
      case 'GI': continent = 'EU'; break;
      case 'GR': continent = 'EU'; break;
      case 'GL': continent = 'NA'; break;
      case 'GD': continent = 'NA'; break;
      case 'GP': continent = 'NA'; break;
      case 'GU': continent = 'OC'; break;
      case 'GT': continent = 'NA'; break;
      case 'GG': continent = 'EU'; break;
      case 'GN': continent = 'AF'; break;
      case 'GW': continent = 'AF'; break;
      case 'GY': continent = 'SA'; break;
      case 'HT': continent = 'NA'; break;
      case 'HM': continent = 'AN'; break;
      case 'VA': continent = 'EU'; break;
      case 'HN': continent = 'NA'; break;
      case 'HK': continent = 'AS'; break;
      case 'HU': continent = 'EU'; break;
      case 'IS': continent = 'EU'; break;
      case 'IN': continent = 'AS'; break;
      case 'ID': continent = 'AS'; break;
      case 'IR': continent = 'AS'; break;
      case 'IQ': continent = 'AS'; break;
      case 'IE': continent = 'EU'; break;
      case 'IM': continent = 'EU'; break;
      case 'IL': continent = 'EU'; break; //real continent = AS
      case 'IT': continent = 'EU'; break;
      case 'JM': continent = 'NA'; break;
      case 'JP': continent = 'AS'; break;
      case 'JE': continent = 'EU'; break;
      case 'JO': continent = 'AS'; break;
      case 'KZ': continent = 'AS'; break;
      case 'KE': continent = 'AF'; break;
      case 'KI': continent = 'OC'; break;
      case 'KP': continent = 'AS'; break;
      case 'KR': continent = 'AS'; break;
      case 'KW': continent = 'AS'; break;
      case 'KG': continent = 'AS'; break;
      case 'LA': continent = 'AS'; break;
      case 'LV': continent = 'EU'; break;
      case 'LB': continent = 'AS'; break;
      case 'LS': continent = 'AF'; break;
      case 'LR': continent = 'AF'; break;
      case 'LY': continent = 'AF'; break;
      case 'LI': continent = 'EU'; break;
      case 'LT': continent = 'EU'; break;
      case 'LU': continent = 'EU'; break;
      case 'MO': continent = 'AS'; break;
      case 'MK': continent = 'EU'; break;
      case 'MG': continent = 'AF'; break;
      case 'MW': continent = 'AF'; break;
      case 'MY': continent = 'AS'; break;
      case 'MV': continent = 'AS'; break;
      case 'ML': continent = 'AF'; break;
      case 'MT': continent = 'EU'; break;
      case 'MH': continent = 'OC'; break;
      case 'MQ': continent = 'NA'; break;
      case 'MR': continent = 'AF'; break;
      case 'MU': continent = 'AF'; break;
      case 'YT': continent = 'AF'; break;
      case 'MX': continent = 'NA'; break;
      case 'FM': continent = 'OC'; break;
      case 'MD': continent = 'EU'; break;
      case 'MC': continent = 'EU'; break;
      case 'MN': continent = 'AS'; break;
      case 'ME': continent = 'EU'; break;
      case 'MS': continent = 'NA'; break;
      case 'MA': continent = 'AF'; break;
      case 'MZ': continent = 'AF'; break;
      case 'MM': continent = 'AS'; break;
      case 'NA': continent = 'AF'; break;
      case 'NR': continent = 'OC'; break;
      case 'NP': continent = 'AS'; break;
      case 'AN': continent = 'NA'; break;
      case 'NL': continent = 'EU'; break;
      case 'NC': continent = 'OC'; break;
      case 'NZ': continent = 'OC'; break;
      case 'NI': continent = 'NA'; break;
      case 'NE': continent = 'AF'; break;
      case 'NG': continent = 'AF'; break;
      case 'NU': continent = 'OC'; break;
      case 'NF': continent = 'OC'; break;
      case 'MP': continent = 'OC'; break;
      case 'NO': continent = 'EU'; break;
      case 'OM': continent = 'AS'; break;
      case 'PK': continent = 'AS'; break;
      case 'PW': continent = 'OC'; break;
      case 'PS': continent = 'AS'; break;
      case 'PA': continent = 'NA'; break;
      case 'PG': continent = 'OC'; break;
      case 'PY': continent = 'SA'; break;
      case 'PE': continent = 'SA'; break;
      case 'PH': continent = 'AS'; break;
      case 'PN': continent = 'OC'; break;
      case 'PL': continent = 'EU'; break;
      case 'PT': continent = 'EU'; break;
      case 'PR': continent = 'NA'; break;
      case 'QA': continent = 'AS'; break;
      case 'RE': continent = 'AF'; break;
      case 'RO': continent = 'EU'; break;
      case 'RU': continent = 'EU'; break;
      case 'RW': continent = 'AF'; break;
      case 'BL': continent = 'NA'; break;
      case 'SH': continent = 'AF'; break;
      case 'KN': continent = 'NA'; break;
      case 'LC': continent = 'NA'; break;
      case 'MF': continent = 'NA'; break;
      case 'PM': continent = 'NA'; break;
      case 'VC': continent = 'NA'; break;
      case 'WS': continent = 'OC'; break;
      case 'SM': continent = 'EU'; break;
      case 'ST': continent = 'AF'; break;
      case 'SA': continent = 'AS'; break;
      case 'SN': continent = 'AF'; break;
      case 'RS': continent = 'EU'; break;
      case 'SC': continent = 'AF'; break;
      case 'SL': continent = 'AF'; break;
      case 'SG': continent = 'AS'; break;
      case 'SK': continent = 'EU'; break;
      case 'SI': continent = 'EU'; break;
      case 'SB': continent = 'OC'; break;
      case 'SO': continent = 'AF'; break;
      case 'ZA': continent = 'AF'; break;
      case 'GS': continent = 'AN'; break;
      case 'ES': continent = 'EU'; break;
      case 'LK': continent = 'AS'; break;
      case 'SD': continent = 'AF'; break;
      case 'SR': continent = 'SA'; break;
      case 'SJ': continent = 'EU'; break;
      case 'SZ': continent = 'AF'; break;
      case 'SE': continent = 'EU'; break;
      case 'CH': continent = 'EU'; break;
      case 'SY': continent = 'AS'; break;
      case 'TW': continent = 'AS'; break;
      case 'TJ': continent = 'AS'; break;
      case 'TZ': continent = 'AF'; break;
      case 'TH': continent = 'AS'; break;
      case 'TL': continent = 'AS'; break;
      case 'TG': continent = 'AF'; break;
      case 'TK': continent = 'OC'; break;
      case 'TO': continent = 'OC'; break;
      case 'TT': continent = 'NA'; break;
      case 'TN': continent = 'AF'; break;
      case 'TR': continent = 'EU'; break; //real continent = AS
      case 'TM': continent = 'AS'; break;
      case 'TC': continent = 'NA'; break;
      case 'TV': continent = 'OC'; break;
      case 'UG': continent = 'AF'; break;
      case 'UA': continent = 'EU'; break;
      case 'AE': continent = 'AS'; break;
      case 'GB': continent = 'EU'; break;
      case 'US': continent = 'NA'; break;
      case 'UM': continent = 'OC'; break;
      case 'VI': continent = 'NA'; break;
      case 'UY': continent = 'SA'; break;
      case 'UZ': continent = 'AS'; break;
      case 'VU': continent = 'OC'; break;
      case 'VE': continent = 'SA'; break;
      case 'VN': continent = 'AS'; break;
      case 'WF': continent = 'OC'; break;
      case 'EH': continent = 'AF'; break;
      case 'YE': continent = 'AS'; break;
      case 'ZM': continent = 'AF'; break;
      case 'ZW': continent = 'AF'; break;
    }
    return continent;
  }
})();
