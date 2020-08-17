/**
 * jquery-date-range-picker
 * @version v0.20.0
 * @link https://github.com/longbill/jquery-date-range-picker
 * @license MIT
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("moment")):e(jQuery,moment)}(function(Z,Q){"use strict";Z.dateRangePickerLanguages={default:{selected:"Selected:",day:"Day",days:"Days",apply:"Close","week-1":"mo","week-2":"tu","week-3":"we","week-4":"th","week-5":"fr","week-6":"sa","week-7":"su","week-number":"W","month-name":["january","february","march","april","may","june","july","august","september","october","november","december"],shortcuts:"Shortcuts","custom-values":"Custom Values",past:"Past",following:"Following",previous:"Previous","prev-week":"Week","prev-month":"Month","prev-year":"Year",next:"Next","next-week":"Week","next-month":"Month","next-year":"Year","less-than":"Date range should not be more than %d days","more-than":"Date range should not be less than %d days","default-more":"Please select a date range longer than %d days","default-single":"Please select a date","default-less":"Please select a date range less than %d days","default-range":"Please select a date range between %d and %d days","default-default":"Please select a date range",time:"Time",hour:"Hour",minute:"Minute"},id:{selected:"Terpilih:",day:"Hari",days:"Hari",apply:"Tutup","week-1":"sen","week-2":"sel","week-3":"rab","week-4":"kam","week-5":"jum","week-6":"sab","week-7":"min","week-number":"W","month-name":["januari","februari","maret","april","mei","juni","juli","agustus","september","oktober","november","desember"],shortcuts:"Pintas","custom-values":"Nilai yang ditentukan",past:"Yang Lalu",following:"Mengikuti",previous:"Sebelumnya","prev-week":"Minggu","prev-month":"Bulan","prev-year":"Tahun",next:"Selanjutnya","next-week":"Minggu","next-month":"Bulan","next-year":"Tahun","less-than":"Tanggal harus lebih dari %d hari","more-than":"Tanggal harus kurang dari %d hari","default-more":"Jarak tanggal harus lebih lama dari %d hari","default-single":"Silakan pilih tanggal","default-less":"Jarak rentang tanggal tidak boleh lebih lama dari %d hari","default-range":"Rentang tanggal harus antara %d dan %d hari","default-default":"Silakan pilih rentang tanggal",time:"Waktu",hour:"Jam",minute:"Menit"},az:{selected:"Seçildi:",day:" gün",days:" gün",apply:"tətbiq","week-1":"1","week-2":"2","week-3":"3","week-4":"4","week-5":"5","week-6":"6","week-7":"7","month-name":["yanvar","fevral","mart","aprel","may","iyun","iyul","avqust","sentyabr","oktyabr","noyabr","dekabr"],shortcuts:"Qısayollar",past:"Keçmiş",following:"Növbəti",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Öncəki həftə","prev-month":"Öncəki ay","prev-year":"Öncəki il",next:"&nbsp;&nbsp;&nbsp;","next-week":"Növbəti həftə","next-month":"Növbəti ay","next-year":"Növbəti il","less-than":"Tarix aralığı %d gündən çox olmamalıdır","more-than":"Tarix aralığı %d gündən az olmamalıdır","default-more":"%d gündən çox bir tarix seçin","default-single":"Tarix seçin","default-less":"%d gündən az bir tarix seçin","default-range":"%d və %d gün aralığında tarixlər seçin","default-default":"Tarix aralığı seçin"},bg:{selected:"Избрано:",day:"Ден",days:"Дни",apply:"Затвори","week-1":"пн","week-2":"вт","week-3":"ср","week-4":"чт","week-5":"пт","week-6":"сб","week-7":"нд","week-number":"С","month-name":["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"],shortcuts:"Преки пътища","custom-values":"Персонализирани стойности",past:"Минал",following:"Следващ",previous:"Предишен","prev-week":"Седмица","prev-month":"Месец","prev-year":"Година",next:"Следващ","next-week":"Седмица","next-month":"Месец","next-year":"Година","less-than":"Периодът от време не трябва да е повече от %d дни","more-than":"Периодът от време не трябва да е по-малко от %d дни","default-more":"Моля изберете период по-дълъг от %d дни","default-single":"Моля изберете дата","default-less":"Моля изберете период по-къс от %d дни","default-range":"Моля изберете период между %d и %d дни","default-default":"Моля изберете период",time:"Време",hour:"Час",minute:"Минута"},cn:{selected:"已选择:",day:"天",days:"天",apply:"确定","week-1":"一","week-2":"二","week-3":"三","week-4":"四","week-5":"五","week-6":"六","week-7":"日","week-number":"周","month-name":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortcuts:"快捷选择",past:"过去",following:"将来",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"上周","prev-month":"上个月","prev-year":"去年",next:"&nbsp;&nbsp;&nbsp;","next-week":"下周","next-month":"下个月","next-year":"明年","less-than":"所选日期范围不能大于%d天","more-than":"所选日期范围不能小于%d天","default-more":"请选择大于%d天的日期范围","default-less":"请选择小于%d天的日期范围","default-range":"请选择%d天到%d天的日期范围","default-single":"请选择一个日期","default-default":"请选择一个日期范围",time:"时间",hour:"小时",minute:"分钟"},cz:{selected:"Vybráno:",day:"Den",days:"Dny",apply:"Zavřít","week-1":"po","week-2":"út","week-3":"st","week-4":"čt","week-5":"pá","week-6":"so","week-7":"ne","month-name":["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],shortcuts:"Zkratky",past:"po",following:"následující",previous:"předchozí","prev-week":"týden","prev-month":"měsíc","prev-year":"rok",next:"další","next-week":"týden","next-month":"měsíc","next-year":"rok","less-than":"Rozsah data by neměl být větší než %d dnů","more-than":"Rozsah data by neměl být menší než %d dnů","default-more":"Prosím zvolte rozsah data větší než %d dnů","default-single":"Prosím zvolte datum","default-less":"Prosím zvolte rozsah data menší než %d dnů","default-range":"Prosím zvolte rozsah data mezi %d a %d dny","default-default":"Prosím zvolte rozsah data"},de:{selected:"Auswahl:",day:"Tag",days:"Tage",apply:"Schließen","week-1":"mo","week-2":"di","week-3":"mi","week-4":"do","week-5":"fr","week-6":"sa","week-7":"so","month-name":["januar","februar","märz","april","mai","juni","juli","august","september","oktober","november","dezember"],shortcuts:"Schnellwahl",past:"Vorherige",following:"Folgende",previous:"Vorherige","prev-week":"Woche","prev-month":"Monat","prev-year":"Jahr",next:"Nächste","next-week":"Woche","next-month":"Monat","next-year":"Jahr","less-than":"Datumsbereich darf nicht größer sein als %d Tage","more-than":"Datumsbereich darf nicht kleiner sein als %d Tage","default-more":"Bitte mindestens %d Tage auswählen","default-single":"Bitte ein Datum auswählen","default-less":"Bitte weniger als %d Tage auswählen","default-range":"Bitte einen Datumsbereich zwischen %d und %d Tagen auswählen","default-default":"Bitte ein Start- und Enddatum auswählen",Time:"Zeit",hour:"Stunde",minute:"Minute"},es:{selected:"Seleccionado:",day:"Día",days:"Días",apply:"Cerrar","week-1":"lu","week-2":"ma","week-3":"mi","week-4":"ju","week-5":"vi","week-6":"sa","week-7":"do","month-name":["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],shortcuts:"Accesos directos",past:"Pasado",following:"Siguiente",previous:"Anterior","prev-week":"Semana","prev-month":"Mes","prev-year":"Año",next:"Siguiente","next-week":"Semana","next-month":"Mes","next-year":"Año","less-than":"El rango no debería ser mayor de %d días","more-than":"El rango no debería ser menor de %d días","default-more":"Por favor selecciona un rango mayor a %d días","default-single":"Por favor selecciona un día","default-less":"Por favor selecciona un rango menor a %d días","default-range":"Por favor selecciona un rango entre %d y %d días","default-default":"Por favor selecciona un rango de fechas."},fr:{selected:"Sélection:",day:"Jour",days:"Jours",apply:"Fermer","week-1":"lu","week-2":"ma","week-3":"me","week-4":"je","week-5":"ve","week-6":"sa","week-7":"di","month-name":["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],shortcuts:"Raccourcis",past:"Passé",following:"Suivant",previous:"Précédent","prev-week":"Semaine","prev-month":"Mois","prev-year":"Année",next:"Suivant","next-week":"Semaine","next-month":"Mois","next-year":"Année","less-than":"L'intervalle ne doit pas être supérieure à %d jours","more-than":"L'intervalle ne doit pas être inférieure à %d jours","default-more":"Merci de choisir une intervalle supérieure à %d jours","default-single":"Merci de choisir une date","default-less":"Merci de choisir une intervalle inférieure %d jours","default-range":"Merci de choisir une intervalle comprise entre %d et %d jours","default-default":"Merci de choisir une date"},hu:{selected:"Kiválasztva:",day:"Nap",days:"Nap",apply:"Ok","week-1":"h","week-2":"k","week-3":"sz","week-4":"cs","week-5":"p","week-6":"sz","week-7":"v","month-name":["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],shortcuts:"Gyorsválasztó",past:"Múlt",following:"Következő",previous:"Előző","prev-week":"Hét","prev-month":"Hónap","prev-year":"Év",next:"Következő","next-week":"Hét","next-month":"Hónap","next-year":"Év","less-than":"A kiválasztás nem lehet több %d napnál","more-than":"A kiválasztás nem lehet több %d napnál","default-more":"Válassz ki egy időszakot ami hosszabb mint %d nap","default-single":"Válassz egy napot","default-less":"Válassz ki egy időszakot ami rövidebb mint %d nap","default-range":"Válassz ki egy %d - %d nap hosszú időszakot","default-default":"Válassz ki egy időszakot"},it:{selected:"Selezionati:",day:"Giorno",days:"Giorni",apply:"Chiudi","week-1":"lu","week-2":"ma","week-3":"me","week-4":"gi","week-5":"ve","week-6":"sa","week-7":"do","month-name":["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],shortcuts:"Scorciatoie",past:"Scorso",following:"Successivo",previous:"Precedente","prev-week":"Settimana","prev-month":"Mese","prev-year":"Anno",next:"Prossimo","next-week":"Settimana","next-month":"Mese","next-year":"Anno","less-than":"L'intervallo non dev'essere maggiore di %d giorni","more-than":"L'intervallo non dev'essere minore di %d giorni","default-more":"Seleziona un intervallo maggiore di %d giorni","default-single":"Seleziona una data","default-less":"Seleziona un intervallo minore di %d giorni","default-range":"Seleziona un intervallo compreso tra i %d e i %d giorni","default-default":"Seleziona un intervallo di date"},ko:{selected:"기간:",day:"일",days:"일간",apply:"닫기","week-1":"월","week-2":"화","week-3":"수","week-4":"목","week-5":"금","week-6":"토","week-7":"일","week-number":"주","month-name":["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],shortcuts:"단축키들",past:"지난(오늘기준)",following:"이후(오늘기준)",previous:"이전","prev-week":"1주","prev-month":"1달","prev-year":"1년",next:"다음","next-week":"1주","next-month":"1달","next-year":"1년","less-than":"날짜 범위는 %d 일보다 많을 수 없습니다","more-than":"날짜 범위는 %d 일보다 작을 수 없습니다","default-more":"날짜 범위를 %d 일보다 길게 선택해 주세요","default-single":"날짜를 선택해 주세요","default-less":"%d 일보다 작은 날짜를 선택해 주세요","default-range":"%d와 %d 일 사이의 날짜 범위를 선택해 주세요","default-default":"날짜 범위를 선택해 주세요",time:"시각",hour:"시",minute:"분"},no:{selected:"Valgt:",day:"Dag",days:"Dager",apply:"Lukk","week-1":"ma","week-2":"ti","week-3":"on","week-4":"to","week-5":"fr","week-6":"lø","week-7":"sø","month-name":["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],shortcuts:"Snarveier","custom-values":"Egendefinerte Verdier",past:"Over",following:"Følger",previous:"Forrige","prev-week":"Uke","prev-month":"Måned","prev-year":"År",next:"Neste","next-week":"Uke","next-month":"Måned","next-year":"År","less-than":"Datoperioden skal ikkje være lengre enn %d dager","more-than":"Datoperioden skal ikkje være kortere enn %d dager","default-more":"Vennligst velg ein datoperiode lengre enn %d dager","default-single":"Vennligst velg ein dato","default-less":"Vennligst velg ein datoperiode mindre enn %d dager","default-range":"Vennligst velg ein datoperiode mellom %d og %d dager","default-default":"Vennligst velg ein datoperiode",time:"Tid",hour:"Time",minute:"Minutter"},nl:{selected:"Geselecteerd:",day:"Dag",days:"Dagen",apply:"Ok","week-1":"ma","week-2":"di","week-3":"wo","week-4":"do","week-5":"vr","week-6":"za","week-7":"zo","month-name":["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],shortcuts:"Snelkoppelingen","custom-values":"Aangepaste waarden",past:"Verleden",following:"Komend",previous:"Vorige","prev-week":"Week","prev-month":"Maand","prev-year":"Jaar",next:"Volgende","next-week":"Week","next-month":"Maand","next-year":"Jaar","less-than":"Interval moet langer dan %d dagen zijn","more-than":"Interval mag niet minder dan %d dagen zijn","default-more":"Selecteer een interval langer dan %dagen","default-single":"Selecteer een datum","default-less":"Selecteer een interval minder dan %d dagen","default-range":"Selecteer een interval tussen %d en %d dagen","default-default":"Selecteer een interval",time:"Tijd",hour:"Uur",minute:"Minuut"},ru:{selected:"Выбрано:",day:"День",days:"Дней",apply:"Применить","week-1":"пн","week-2":"вт","week-3":"ср","week-4":"чт","week-5":"пт","week-6":"сб","week-7":"вс","month-name":["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],shortcuts:"Быстрый выбор","custom-values":"Пользовательские значения",past:"Прошедшие",following:"Следующие",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Неделя","prev-month":"Месяц","prev-year":"Год",next:"&nbsp;&nbsp;&nbsp;","next-week":"Неделя","next-month":"Месяц","next-year":"Год","less-than":"Диапазон не может быть больше %d дней","more-than":"Диапазон не может быть меньше %d дней","default-more":"Пожалуйста выберите диапазон больше %d дней","default-single":"Пожалуйста выберите дату","default-less":"Пожалуйста выберите диапазон меньше %d дней","default-range":"Пожалуйста выберите диапазон между %d и %d днями","default-default":"Пожалуйста выберите диапазон",time:"Время",hour:"Часы",minute:"Минуты"},uk:{selected:"Вибрано:",day:"День",days:"Днів",apply:"Застосувати","week-1":"пн","week-2":"вт","week-3":"ср","week-4":"чт","week-5":"пт","week-6":"сб","week-7":"нд","month-name":["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"],shortcuts:"Швидкий вибір","custom-values":"Значення користувача",past:"Минулі",following:"Наступні",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"Тиждень","prev-month":"Місяць","prev-year":"Рік",next:"&nbsp;&nbsp;&nbsp;","next-week":"Тиждень","next-month":"Місяць","next-year":"Рік","less-than":"Діапазон не може бути більш ніж %d днів","more-than":"Діапазон не може бути меньш ніж %d днів","default-more":"Будь ласка виберіть діапазон більше %d днів","default-single":"Будь ласка виберіть дату","default-less":"Будь ласка виберіть діапазон менше %d днів","default-range":"Будь ласка виберіть діапазон між %d та %d днями","default-default":"Будь ласка виберіть діапазон",time:"Час",hour:"Години",minute:"Хвилини"},pl:{selected:"Wybrany:",day:"Dzień",days:"Dni",apply:"Zamknij","week-1":"pon","week-2":"wt","week-3":"śr","week-4":"czw","week-5":"pt","week-6":"so","week-7":"nd","month-name":["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],shortcuts:"Skróty","custom-values":"Niestandardowe wartości",past:"Przeszłe",following:"Następne",previous:"Poprzednie","prev-week":"tydzień","prev-month":"miesiąc","prev-year":"rok",next:"Następny","next-week":"tydzień","next-month":"miesiąc","next-year":"rok","less-than":"Okres nie powinien być dłuższy niż %d dni","more-than":"Okres nie powinien być krótszy niż  %d ni","default-more":"Wybierz okres dłuższy niż %d dni","default-single":"Wybierz datę","default-less":"Wybierz okres krótszy niż %d dni","default-range":"Wybierz okres trwający od %d do %d dni","default-default":"Wybierz okres",time:"Czas",hour:"Godzina",minute:"Minuta"},se:{selected:"Vald:",day:"dag",days:"dagar",apply:"godkänn","week-1":"ma","week-2":"ti","week-3":"on","week-4":"to","week-5":"fr","week-6":"lö","week-7":"sö","month-name":["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],shortcuts:"genvägar","custom-values":"Anpassade värden",past:"över",following:"följande",previous:"förra","prev-week":"vecka","prev-month":"månad","prev-year":"år",next:"nästa","next-week":"vecka","next-month":"måned","next-year":"år","less-than":"Datumintervall bör inte vara mindre än %d dagar","more-than":"Datumintervall bör inte vara mer än %d dagar","default-more":"Välj ett datumintervall längre än %d dagar","default-single":"Välj ett datum","default-less":"Välj ett datumintervall mindre än %d dagar","default-range":"Välj ett datumintervall mellan %d och %d dagar","default-default":"Välj ett datumintervall",time:"tid",hour:"timme",minute:"minut"},pt:{selected:"Selecionado:",day:"Dia",days:"Dias",apply:"Fechar","week-1":"seg","week-2":"ter","week-3":"qua","week-4":"qui","week-5":"sex","week-6":"sab","week-7":"dom","week-number":"N","month-name":["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],shortcuts:"Atalhos","custom-values":"Valores Personalizados",past:"Passado",following:"Seguinte",previous:"Anterior","prev-week":"Semana","prev-month":"Mês","prev-year":"Ano",next:"Próximo","next-week":"Próxima Semana","next-month":"Próximo Mês","next-year":"Próximo Ano","less-than":"O período selecionado não deve ser maior que %d dias","more-than":"O período selecionado não deve ser menor que %d dias","default-more":"Selecione um período superior a %d dias","default-single":"Selecione uma data","default-less":"Selecione um período inferior a %d dias","default-range":"Selecione um período de %d a %d dias","default-default":"Selecione um período",time:"Tempo",hour:"Hora",minute:"Minuto"},tc:{selected:"已選擇:",day:"天",days:"天",apply:"確定","week-1":"一","week-2":"二","week-3":"三","week-4":"四","week-5":"五","week-6":"六","week-7":"日","week-number":"周","month-name":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortcuts:"快速選擇",past:"過去",following:"將來",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"上週","prev-month":"上個月","prev-year":"去年",next:"&nbsp;&nbsp;&nbsp;","next-week":"下周","next-month":"下個月","next-year":"明年","less-than":"所選日期範圍不能大於%d天","more-than":"所選日期範圍不能小於%d天","default-more":"請選擇大於%d天的日期範圍","default-less":"請選擇小於%d天的日期範圍","default-range":"請選擇%d天到%d天的日期範圍","default-single":"請選擇一個日期","default-default":"請選擇一個日期範圍",time:"日期",hour:"小時",minute:"分鐘"},ja:{selected:"選択しました:",day:"日",days:"日々",apply:"閉じる","week-1":"月","week-2":"火","week-3":"水","week-4":"木","week-5":"金","week-6":"土","week-7":"日","month-name":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],shortcuts:"クイック選択",past:"過去",following:"将来",previous:"&nbsp;&nbsp;&nbsp;","prev-week":"先週、","prev-month":"先月","prev-year":"昨年",next:"&nbsp;&nbsp;&nbsp;","next-week":"来週","next-month":"来月","next-year":"来年","less-than":"日付の範囲は ％d 日以上にすべきではありません","more-than":"日付の範囲は ％d 日を下回ってはいけません","default-more":"％d 日よりも長い期間を選択してください","default-less":"％d 日未満の期間を選択してください","default-range":"％d と％ d日の間の日付範囲を選択してください","default-single":"日付を選択してください","default-default":"日付範囲を選択してください",time:"時間",hour:"時間",minute:"分"},da:{selected:"Valgt:",day:"Dag",days:"Dage",apply:"Luk","week-1":"ma","week-2":"ti","week-3":"on","week-4":"to","week-5":"fr","week-6":"lö","week-7":"sö","month-name":["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],shortcuts:"genveje","custom-values":"Brugerdefinerede værdier",past:"Forbi",following:"Følgende",previous:"Forrige","prev-week":"uge","prev-month":"månad","prev-year":"år",next:"Næste","next-week":"Næste uge","next-month":"Næste måned","next-year":"Næste år","less-than":"Dato interval bør ikke være med end %d dage","more-than":"Dato interval bør ikke være mindre end %d dage","default-more":"Vælg datointerval længere end %d dage","default-single":"Vælg dato","default-less":"Vælg datointerval mindre end %d dage","default-range":"Vælg datointerval mellem %d og %d dage","default-default":"Vælg datointerval",time:"tid",hour:"time",minute:"minut"},fi:{selected:"Valittu:",day:"Päivä",days:"Päivää",apply:"Sulje","week-1":"ma","week-2":"ti","week-3":"ke","week-4":"to","week-5":"pe","week-6":"la","week-7":"su","week-number":"V","month-name":["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],shortcuts:"Pikavalinnat","custom-values":"Mukautetut Arvot",past:"Menneet",following:"Tulevat",previous:"Edellinen","prev-week":"Viikko","prev-month":"Kuukausi","prev-year":"Vuosi",next:"Seuraava","next-week":"Viikko","next-month":"Kuukausi","next-year":"Vuosi","less-than":"Aikajakson tulisi olla vähemmän kuin %d päivää","more-than":"Aikajakson ei tulisi olla vähempää kuin %d päivää","default-more":"Valitse pidempi aikajakso kuin %d päivää","default-single":"Valitse päivä","default-less":"Valitse lyhyempi aikajakso kuin %d päivää","default-range":"Valitse aikajakso %d ja %d päivän väliltä","default-default":"Valitse aikajakso",time:"Aika",hour:"Tunti",minute:"Minuutti"},cat:{selected:"Seleccionats:",day:"Dia",days:"Dies",apply:"Tanca","week-1":"Dl","week-2":"Dm","week-3":"Dc","week-4":"Dj","week-5":"Dv","week-6":"Ds","week-7":"Dg","week-number":"S","month-name":["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"],shortcuts:"Dreçeres","custom-values":"Valors personalitzats",past:"Passat",following:"Futur",previous:"Anterior","prev-week":"Setmana","prev-month":"Mes","prev-year":"Any",next:"Següent","next-week":"Setmana","next-month":"Mes","next-year":"Any","less-than":"El període no hauria de ser de més de %d dies","more-than":"El període no hauria de ser de menys de %d dies","default-more":"Perfavor selecciona un període més gran de %d dies","default-single":"Perfavor selecciona una data","default-less":"Perfavor selecciona un període de menys de %d dies","default-range":"Perfavor selecciona un període d'entre %d i %d dies","default-default":"Perfavor selecciona un període",time:"Temps",hour:"Hora",minute:"Minut"}},Z.fn.dateRangePicker=function(p){p||(p={}),(p=Z.extend(!0,{autoClose:!1,format:"YYYY-MM-DD",separator:" to ",language:"auto",startOfWeek:"sunday",getValue:function(){return Z(this).val()},setValue:function(e){Z(this).attr("readonly")||Z(this).is(":disabled")||e==Z(this).val()||Z(this).val(e)},startDate:!1,endDate:!1,time:{enabled:!1},minDays:0,maxDays:0,showShortcuts:!1,shortcuts:{},customShortcuts:[],inline:!1,container:"body",alwaysOpen:!1,singleDate:!1,lookBehind:!1,batchMode:!1,duration:200,stickyMonths:!1,dayDivAttrs:[],dayTdAttrs:[],selectForward:!1,selectBackward:!1,applyBtnClass:"",singleMonth:"auto",hoveringTooltip:function(e,t,a){return 1<e?e+" "+K("days"):""},showTopbar:!0,swapTime:!1,showWeekNumbers:!1,getWeekNumber:function(e){return Q(e).format("w")},customOpenAnimation:null,customCloseAnimation:null,customArrowPrevSymbol:null,customArrowNextSymbol:null,monthSelect:!1,yearSelect:!1},p)).start=!1,p.end=!1,p.startWeek=!1,p.isTouchDevice="ontouchstart"in window||navigator.msMaxTouchPoints,p.isTouchDevice&&(p.hoveringTooltip=!1),"auto"==p.singleMonth&&(p.singleMonth=Z(window).width()<480),p.singleMonth&&(p.stickyMonths=!1),p.showTopbar||(p.autoClose=!0),p.startDate&&"string"==typeof p.startDate&&(p.startDate=Q(p.startDate,p.format).toDate()),p.endDate&&"string"==typeof p.endDate&&(p.endDate=Q(p.endDate,p.format).toDate()),p.yearSelect&&"boolean"==typeof p.yearSelect&&(p.yearSelect=function(e){return[e-5,e+5]});var m,e,r=function(){{if("auto"==p.language){var e=navigator.language?navigator.language:navigator.browserLanguage;return e&&(e=e.toLowerCase())in Z.dateRangePickerLanguages?Z.dateRangePickerLanguages[e]:Z.dateRangePickerLanguages.default}return p.language&&p.language in Z.dateRangePickerLanguages?Z.dateRangePickerLanguages[p.language]:Z.dateRangePickerLanguages.default}}(),s=!1,n=this,i=Z(n).get(0);return Z(this).off(".datepicker").on("click.datepicker",function(e){m.is(":visible")||t(p.duration)}).on("change.datepicker",function(e){a()}).on("keyup.datepicker",function(){try{clearTimeout(e)}catch(e){}e=setTimeout(function(){a()},2e3)}),function(){var t=this;if(Z(this).data("date-picker-opened"))return void N();Z(this).data("date-picker-opened",!0),(m=function(){var e,t='<div class="date-picker-wrapper';p.extraClass&&(t+=" "+p.extraClass+" "),p.singleDate&&(t+=" single-date "),p.showShortcuts||(t+=" no-shortcuts "),p.showTopbar||(t+=" no-topbar "),p.customTopBar&&(t+=" custom-topbar "),t+='">',p.showTopbar&&(t+='<div class="drp_top-bar">',p.customTopBar?("function"==typeof p.customTopBar&&(p.customTopBar=p.customTopBar()),t+='<div class="custom-top">'+p.customTopBar+"</div>"):(t+='<div class="normal-top"><span class="selection-top">'+K("selected")+' </span> <b class="start-day">...</b>',p.singleDate||(t+=' <span class="separator-day">'+p.separator+'</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> '+K("days")+")</i>"),t+="</div>",t+='<div class="error-top">error</div><div class="default-top">default</div>'),t+='<input type="button" class="apply-btn disabled'+(!(e="")===p.autoClose&&(e+=" hide"),""!==p.applyBtnClass&&(e+=" "+p.applyBtnClass),e)+'" value="'+K("apply")+'" />',t+="</div>");var a=p.showWeekNumbers?6:5,n="&lt;";p.customArrowPrevSymbol&&(n=p.customArrowPrevSymbol);var r="&gt;";if(p.customArrowNextSymbol&&(r=p.customArrowNextSymbol),t+='<div class="month-wrapper">   <table class="month1" cellspacing="0" border="0" cellpadding="0">       <thead>           <tr class="caption">               <th>                   <span class="prev">'+n+'                   </span>               </th>               <th colspan="'+a+'" class="month-name">               </th>               <th>'+(p.singleDate||!p.stickyMonths?'<span class="next">'+r+"</span>":"")+'               </th>           </tr>           <tr class="week-name">'+E()+"       </thead>       <tbody></tbody>   </table>",p.singleMonth||(t+='<div class="gap">'+function(){for(var e=['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'],t=0;t<20;t++)e.push('<div class="gap-line"><div class="gap-1"></div><div class="gap-2"></div><div class="gap-3"></div></div>');return e.push("</div>"),e.join("")}()+'</div><table class="month2" cellspacing="0" border="0" cellpadding="0">   <thead>   <tr class="caption">       <th>'+(p.stickyMonths?"":'<span class="prev">'+n+"</span>")+'       </th>       <th colspan="'+a+'" class="month-name">       </th>       <th>           <span class="next">'+r+'</span>       </th>   </tr>   <tr class="week-name">'+E()+"   </thead>   <tbody></tbody></table>"),t+='<div class="dp-clearfix"></div><div class="time"><div class="time1"></div>',p.singleDate||(t+='<div class="time2"></div>'),t+='</div><div class="dp-clearfix"></div></div>',t+='<div class="footer">',p.showShortcuts){t+='<div class="shortcuts"><b>'+K("shortcuts")+"</b>";var s=p.shortcuts;if(s){var i;if(s["prev-days"]&&0<s["prev-days"].length){t+='&nbsp;<span class="prev-days">'+K("past");for(var o=0;o<s["prev-days"].length;o++)i=s["prev-days"][o],i+=1<s["prev-days"][o]?K("days"):K("day"),t+=' <a href="javascript:;" shortcut="day,-'+s["prev-days"][o]+'">'+i+"</a>";t+="</span>"}if(s["next-days"]&&0<s["next-days"].length){t+='&nbsp;<span class="next-days">'+K("following");for(var o=0;o<s["next-days"].length;o++)i=s["next-days"][o],i+=1<s["next-days"][o]?K("days"):K("day"),t+=' <a href="javascript:;" shortcut="day,'+s["next-days"][o]+'">'+i+"</a>";t+="</span>"}if(s.prev&&0<s.prev.length){t+='&nbsp;<span class="prev-buttons">'+K("previous");for(var o=0;o<s.prev.length;o++)i=K("prev-"+s.prev[o]),t+=' <a href="javascript:;" shortcut="prev,'+s.prev[o]+'">'+i+"</a>";t+="</span>"}if(s.next&&0<s.next.length){t+='&nbsp;<span class="next-buttons">'+K("next");for(var o=0;o<s.next.length;o++)i=K("next-"+s.next[o]),t+=' <a href="javascript:;" shortcut="next,'+s.next[o]+'">'+i+"</a>";t+="</span>"}}if(p.customShortcuts)for(var o=0;o<p.customShortcuts.length;o++){var d=p.customShortcuts[o];t+='&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">'+d.name+"</a></span>"}t+="</div>"}if(p.showCustomValues&&(t+='<div class="customValues"><b>'+(p.customValueLabel||K("custom-values"))+"</b>",p.customValues))for(var o=0;o<p.customValues.length;o++){var l=p.customValues[o];t+='&nbsp;<span class="custom-value"><a href="javascript:;" custom="'+l.value+'">'+l.name+"</a></span>"}return Z(t+="</div></div>")}().hide()).append('<div class="date-range-length-tip"></div>'),Z(p.container).append(m),p.inline?m.addClass("inline-wrapper"):o();p.alwaysOpen&&m.find(".apply-btn").hide();var e=_();if(G(e),p.time.enabled)if(p.startDate&&p.endDate||p.start&&p.end)Y(Q(p.start||p.startDate).toDate(),"time1"),Y(Q(p.end||p.endDate).toDate(),"time2");else{var a=p.defaultEndTime?p.defaultEndTime:e;Y(e,"time1"),Y(a,"time2")}var n="";n=p.singleDate?K("default-single"):p.minDays&&p.maxDays?K("default-range"):p.minDays?K("default-more"):p.maxDays?K("default-less"):K("default-default");m.find(".default-top").html(n.replace(/\%d/,p.minDays).replace(/\%d/,p.maxDays)),p.singleMonth?m.addClass("single-month"):m.addClass("two-months");setTimeout(function(){l(),s=!0},0),m.click(function(e){e.stopPropagation()}),Z(document).on("click.datepicker",U),m.find(".next").click(function(){p.stickyMonths?function(e){var t=H(p.month1),a=H(p.month2);if(q(a))return;if(!p.singleDate&&0<=L(t,a))return;z(t,"month1"),z(a,"month2"),j()}():function(e){var t=Z(e).parents("table").hasClass("month2"),a=t?p.month2:p.month1;if(a=H(a),!p.singleMonth&&!p.singleDate&&!t&&0<=L(a,p.month2)||q(a))return;z(a,t?"month2":"month1"),I()}(this)}),m.find(".prev").click(function(){p.stickyMonths?function(e){var t=R(p.month1),a=R(p.month2);if(q(t))return;if(!p.singleDate&&L(a,t)<=0)return;z(a,"month2"),z(t,"month1"),j()}():function(e){var t=Z(e).parents("table").hasClass("month2"),a=t?p.month2:p.month1;if(a=R(a),t&&L(a,p.month1)<=0||q(a))return;z(a,t?"month2":"month1"),I()}(this)}),m.attr("unselectable","on").css("user-select","none").on("selectstart",function(e){return e.preventDefault(),!1}),m.find(".apply-btn").click(function(){N();var e=W(new Date(p.start))+p.separator+W(new Date(p.end));Z(t).trigger("datepicker-apply",{value:e,date1:new Date(p.start),date2:new Date(p.end)})}),m.find("[custom]").click(function(){var e=Z(this).attr("custom");p.start=!1,p.end=!1,m.find(".day.checked").removeClass("checked"),p.setValue.call(i,e),M(),S(!0),j(),p.autoClose&&N()}),m.find("[shortcut]").click(function(){var e,t=Z(this).attr("shortcut"),a=new Date,n=!1;if(-1!=t.indexOf("day")){var r=parseInt(t.split(",",2)[1],10);n=new Date((new Date).getTime()+864e5*r),a=new Date(a.getTime()+864e5*(0<r?1:-1))}else if(-1!=t.indexOf("week")){var s;for(e=-1!=t.indexOf("prev,")?-1:1,s=1==e?"monday"==p.startOfWeek?1:0:"monday"==p.startOfWeek?0:6,a=new Date(a.getTime()-864e5);a.getDay()!=s;)a=new Date(a.getTime()+864e5*e);n=new Date(a.getTime()+864e5*e*6)}else if(-1!=t.indexOf("month"))e=-1!=t.indexOf("prev,")?-1:1,(n=1==e?H(a):R(a)).setDate(1),(a=H(n)).setDate(1),a=new Date(a.getTime()-864e5);else if(-1!=t.indexOf("year"))e=-1!=t.indexOf("prev,")?-1:1,(n=new Date).setFullYear(a.getFullYear()+e),n.setMonth(0),n.setDate(1),a.setFullYear(a.getFullYear()+e),a.setMonth(11),a.setDate(31);else if("custom"==t){var i=Z(this).html();if(p.customShortcuts&&0<p.customShortcuts.length)for(var o=0;o<p.customShortcuts.length;o++){var d=p.customShortcuts[o];if(d.name==i){var l=[];if((l=d.dates.call())&&2==l.length&&(n=l[0],a=l[1]),l&&1==l.length){var u=l[0];z(u,"month1"),z(H(u),"month2"),I()}break}}}n&&a&&(T(n,a),M())}),m.find(".time1 input[type=range]").on("change touchmove",function(e){var t=e.target,a="hour"==t.name?Z(t).val().replace(/^(\d{1})$/,"0$1"):void 0,n="minute"==t.name?Z(t).val().replace(/^(\d{1})$/,"0$1"):void 0;c("time1",a,n)}),m.find(".time2 input[type=range]").on("change touchmove",function(e){var t=e.target,a="hour"==t.name?Z(t).val().replace(/^(\d{1})$/,"0$1"):void 0,n="minute"==t.name?Z(t).val().replace(/^(\d{1})$/,"0$1"):void 0;c("time2",a,n)})}.call(this),p.alwaysOpen&&t(0),Z(this).data("dateRangePicker",{setStart:function(e){return"string"==typeof e&&(e=Q(e,p.format).toDate()),p.end=!1,C(e),this},setEnd:function(e,t){var a=new Date;return a.setTime(p.start),"string"==typeof e&&(e=Q(e,p.format).toDate()),T(a,e,t),this},setDateRange:function(e,t,a){"string"==typeof e&&"string"==typeof t&&(e=Q(e,p.format).toDate(),t=Q(t,p.format).toDate()),T(e,t,a)},clear:function(){p.start=!1,p.end=!1,m.find(".day.checked").removeClass("checked"),m.find(".day.last-date-selected").removeClass("last-date-selected"),m.find(".day.first-date-selected").removeClass("first-date-selected"),p.setValue.call(i,""),M(),S(),j()},close:N,open:t,redraw:B,getDatePicker:function(){return m},resetMonthsView:G,destroy:function(){Z(n).off(".datepicker"),Z(n).data("dateRangePicker",""),Z(n).data("date-picker-opened",null),m.remove(),Z(window).off("resize.datepicker",o),Z(document).off("click.datepicker",U)}}),Z(window).on("resize.datepicker",o),this;function o(){if(!p.inline){var e=Z(n).offset();if("relative"==Z(p.container).css("position")){var t=Z(p.container).offset(),a=Math.max(0,e.left+m.outerWidth()-Z("body").width()+16);m.css({top:e.top-t.top+Z(n).outerHeight()+4,left:e.left-t.left-a})}else e.left<460?m.css({top:e.top+Z(n).outerHeight()+parseInt(Z("body").css("border-top")||0,10),left:e.left}):m.css({top:e.top+Z(n).outerHeight()+parseInt(Z("body").css("border-top")||0,10),left:e.left+Z(n).width()-m.width()-16})}}function t(e){B(),a(),p.customOpenAnimation?p.customOpenAnimation.call(m.get(0),function(){Z(n).trigger("datepicker-opened",{relatedTarget:m})}):m.slideDown(e,function(){Z(n).trigger("datepicker-opened",{relatedTarget:m})}),Z(n).trigger("datepicker-open",{relatedTarget:m}),I(),l(),o()}function a(){var e=p.getValue.call(i),t=e?e.split(p.separator):"";if(t&&(1==t.length&&p.singleDate||2<=t.length)){var a=p.format;a.match(/Do/)&&(a=a.replace(/Do/,"D"),t[0]=t[0].replace(/(\d+)(th|nd|st)/,"$1"),2<=t.length&&(t[1]=t[1].replace(/(\d+)(th|nd|st)/,"$1"))),s=!1,2<=t.length?T(d(t[0],a,Q.locale(p.language)),d(t[1],a,Q.locale(p.language))):1==t.length&&p.singleDate&&C(d(t[0],a,Q.locale(p.language))),s=!0}}function d(e,t,a){return Q(e,t,a).isValid()?Q(e,t,a).toDate():Q().toDate()}function l(){var e=m.find(".gap").css("margin-left");e&&(e=parseInt(e));var t=m.find(".month1").width(),a=m.find(".gap").width()+(e?2*e:0),n=m.find(".month2").width();m.find(".month-wrapper").width(t+a+n)}function u(e,t){m.find("."+e+" input[type=range].hour-range").val(Q(t).hours()),m.find("."+e+" input[type=range].minute-range").val(Q(t).minutes()),c(e,Q(t).format("HH"),Q(t).format("mm"))}function h(e,t){p[e]=parseInt(Q(parseInt(t)).startOf("day").add(Q(p[e+"Time"]).format("HH"),"h").add(Q(p[e+"Time"]).format("mm"),"m").valueOf())}function c(e,r,s){switch(r&&m.find("."+e+" .hour-val").text(r),s&&m.find("."+e+" .minute-val").text(s),e){case"time1":p.start&&t("start",Q(p.start)),t("startTime",Q(p.startTime||Q().valueOf()));break;case"time2":p.end&&t("end",Q(p.end)),t("endTime",Q(p.endTime||Q().valueOf()))}function t(e,t){var a=t.format("HH"),n=t.format("mm");p[e]=t.startOf("day").add(r||a,"h").add(s||n,"m").valueOf()}M(),S(),j()}function f(e){var t=e;return"week-range"===p.batchMode?t="monday"===p.startOfWeek?Q(parseInt(e)).startOf("isoweek").valueOf():Q(parseInt(e)).startOf("week").valueOf():"month-range"===p.batchMode&&(t=Q(parseInt(e)).startOf("month").valueOf()),t}function v(e){var t=e;return"week-range"===p.batchMode?t="monday"===p.startOfWeek?Q(parseInt(e)).endOf("isoweek").valueOf():Q(parseInt(e)).endOf("week").valueOf():"month-range"===p.batchMode&&(t=Q(parseInt(e)).endOf("month").valueOf()),t}function g(e){if(!e.hasClass("invalid")){var t=e.attr("time");if(e.addClass("checked"),p.singleDate?(p.start=t,p.end=!1):"week"===p.batchMode?"monday"===p.startOfWeek?(p.start=Q(parseInt(t)).startOf("isoweek").valueOf(),p.end=Q(parseInt(t)).endOf("isoweek").valueOf()):(p.end=Q(parseInt(t)).endOf("week").valueOf(),p.start=Q(parseInt(t)).startOf("week").valueOf()):"workweek"===p.batchMode?(p.start=Q(parseInt(t)).day(1).valueOf(),p.end=Q(parseInt(t)).day(5).valueOf()):"weekend"===p.batchMode?(p.start=Q(parseInt(t)).day(6).valueOf(),p.end=Q(parseInt(t)).day(7).valueOf()):"month"===p.batchMode?(p.start=Q(parseInt(t)).startOf("month").valueOf(),p.end=Q(parseInt(t)).endOf("month").valueOf()):p.start&&p.end||!p.start&&!p.end?(p.start=f(t),p.end=!1):p.start&&(p.end=v(t),p.time.enabled&&h("end",p.end)),p.time.enabled&&(p.start&&h("start",p.start),p.end&&h("end",p.end)),!p.singleDate&&p.start&&p.end&&p.start>p.end){var a=p.end;p.end=v(p.start),p.start=f(a),p.time.enabled&&p.swapTime&&(u("time1",p.start),u("time2",p.end))}p.start=parseInt(p.start),p.end=parseInt(p.end),b(),p.start&&!p.end&&(Z(n).trigger("datepicker-first-date-selected",{date1:new Date(p.start)}),y(e)),w(),M(),S(),j(),x()}}function k(e){if(e=parseInt(e,10),p.startDate&&F(e,p.startDate)<0)return!1;if(p.endDate&&0<F(e,p.endDate))return!1;if(p.start&&!p.end&&!p.singleDate){if(0<p.maxDays&&O(e,p.start)>p.maxDays)return!1;if(0<p.minDays&&O(e,p.start)<p.minDays)return!1;if(p.selectForward&&e<p.start)return!1;if(p.selectBackward&&e>p.start)return!1;if(p.beforeShowDay&&"function"==typeof p.beforeShowDay){for(var t=!0,a=e;1<O(a,p.start);){if(!p.beforeShowDay(new Date(a))[0]){t=!1;break}if(Math.abs(a-p.start)<864e5)break;a>p.start&&(a-=864e5),a<p.start&&(a+=864e5)}if(!t)return!1}}return!0}function w(){return m.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"),p.start&&!p.end&&m.find(".day.toMonth.valid").each(function(){k(parseInt(Z(this).attr("time"),10))?Z(this).addClass("valid tmp").removeClass("invalid"):Z(this).addClass("invalid tmp").removeClass("valid")}),!0}function y(e){var t=parseInt(e.attr("time")),a="";if(e.hasClass("has-tooltip")&&e.attr("data-tooltip"))a='<span class="tooltip-content">'+e.attr("data-tooltip")+"</span>";else if(!e.hasClass("invalid"))if(p.singleDate)m.find(".day.hovering").removeClass("hovering"),e.addClass("hovering");else if(m.find(".day").each(function(){var e=parseInt(Z(this).attr("time"));p.start,p.end;e==t?Z(this).addClass("hovering"):Z(this).removeClass("hovering"),p.start&&!p.end&&(p.start<e&&e<=t||p.start>e&&t<=e)?Z(this).addClass("hovering"):Z(this).removeClass("hovering")}),p.start&&!p.end){var n=O(t,p.start);p.hoveringTooltip&&("function"==typeof p.hoveringTooltip?a=p.hoveringTooltip(n,p.start,t):!0===p.hoveringTooltip&&1<n&&(a=n+" "+K("days")))}if(a){var r=e.offset(),s=m.offset(),i=r.left-s.left,o=r.top-s.top;i+=e.width()/2;var d=m.find(".date-range-length-tip"),l=d.css({visibility:"hidden",display:"none"}).html(a).width(),u=d.height();i-=l/2,o-=u,setTimeout(function(){d.css({left:i,top:o,display:"block",visibility:"visible"})},10)}else m.find(".date-range-length-tip").hide()}function b(){m.find(".day.hovering").removeClass("hovering"),m.find(".date-range-length-tip").hide()}function D(e){var t=e.val(),a=e.attr("name"),n=e.parents("table").hasClass("month1")?"month1":"month2",r="month1"===n?"month2":"month1",s=!!p.startDate&&Q(p.startDate),i=!!p.endDate&&Q(p.endDate),o=Q(p[n])[a](t);s&&o.isSameOrBefore(s)&&(o=s.add("month2"===n?1:0,"month")),i&&o.isSameOrAfter(i)&&(o=i.add(p.singleMonth||"month1"!==n?0:-1,"month")),z(o,n),"month1"===n?(p.stickyMonths||Q(o).isSameOrAfter(p[r],"month"))&&z(Q(o).add(1,"month"),r):(p.stickyMonths||Q(o).isSameOrBefore(p[r],"month"))&&z(Q(o).add(-1,"month"),r),I()}function x(){!0===p.singleDate?s&&p.start&&p.autoClose&&N():s&&p.start&&p.end&&p.autoClose&&N()}function M(){var e=Math.ceil((p.end-p.start)/864e5)+1;p.singleDate?p.start&&!p.end?m.find(".drp_top-bar").removeClass("error").addClass("normal"):m.find(".drp_top-bar").removeClass("error").removeClass("normal"):p.maxDays&&e>p.maxDays?(p.start=!1,p.end=!1,m.find(".day").removeClass("checked"),m.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(K("less-than").replace("%d",p.maxDays))):p.minDays&&e<p.minDays?(p.start=!1,p.end=!1,m.find(".day").removeClass("checked"),m.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(K("more-than").replace("%d",p.minDays))):p.start||p.end?m.find(".drp_top-bar").removeClass("error").addClass("normal"):m.find(".drp_top-bar").removeClass("error").removeClass("normal"),p.singleDate&&p.start&&!p.end||!p.singleDate&&p.start&&p.end?m.find(".apply-btn").removeClass("disabled"):m.find(".apply-btn").addClass("disabled"),p.batchMode&&(p.start&&p.startDate&&F(p.start,p.startDate)<0||p.end&&p.endDate&&0<F(p.end,p.endDate))&&(p.start=!1,p.end=!1,m.find(".day").removeClass("checked"))}function S(e,t){var a;m.find(".start-day").html("..."),m.find(".end-day").html("..."),m.find(".selected-days").hide(),p.start&&m.find(".start-day").html(W(new Date(parseInt(p.start)))),p.end&&m.find(".end-day").html(W(new Date(parseInt(p.end)))),p.start&&p.singleDate?(m.find(".apply-btn").removeClass("disabled"),a=W(new Date(p.start)),p.setValue.call(i,a,W(new Date(p.start)),W(new Date(p.end))),s&&!t&&Z(n).trigger("datepicker-change",{value:a,date1:new Date(p.start)})):p.start&&p.end?(m.find(".selected-days").show().find(".selected-days-num").html(O(p.end,p.start)),m.find(".apply-btn").removeClass("disabled"),a=W(new Date(p.start))+p.separator+W(new Date(p.end)),p.setValue.call(i,a,W(new Date(p.start)),W(new Date(p.end))),s&&!t&&Z(n).trigger("datepicker-change",{value:a,date1:new Date(p.start),date2:new Date(p.end)})):e?m.find(".apply-btn").removeClass("disabled"):m.find(".apply-btn").addClass("disabled")}function O(e,t){return Math.abs(Q(e).diff(Q(t),"d"))+1}function T(e,t,a){if(e.getTime()>t.getTime()){var n=t;t=e,e=n,n=null}var r=!0;if(p.startDate&&F(e,p.startDate)<0&&(r=!1),p.endDate&&0<F(t,p.endDate)&&(r=!1),!r)return z(p.startDate,"month1"),z(H(p.startDate),"month2"),void I();p.start=e.getTime(),p.end=t.getTime(),p.time.enabled&&(u("time1",e),u("time2",t)),(p.stickyMonths||0<F(e,t)&&0===L(e,t))&&(p.lookBehind?e=R(t):t=H(e)),p.stickyMonths&&!1!==p.endDate&&0<L(t,p.endDate)&&(e=R(e),t=R(t)),p.stickyMonths||0===L(e,t)&&(p.lookBehind?e=R(t):t=H(e)),z(e,"month1"),z(t,"month2"),I(),M(),S(!1,a),x()}function C(e){var t=!0;if(p.startDate&&F(e,p.startDate)<0&&(t=!1),p.endDate&&0<F(e,p.endDate)&&(t=!1),t){if(p.start=e.getTime(),p.time.enabled&&u("time1",e),z(e,"month1"),!0!==p.singleMonth)z(H(e),"month2");I(),S(),x()}else z(p.startDate,"month1")}function j(){(p.start||p.end)&&(m.find(".day").each(function(){var e=parseInt(Z(this).attr("time")),t=p.start,a=p.end;p.time.enabled&&(e=Q(e).startOf("day").valueOf(),t=Q(t||Q().valueOf()).startOf("day").valueOf(),a=Q(a||Q().valueOf()).startOf("day").valueOf()),p.start&&p.end&&e<=a&&t<=e||p.start&&!p.end&&Q(t).format("YYYY-MM-DD")==Q(e).format("YYYY-MM-DD")?Z(this).addClass("checked"):Z(this).removeClass("checked"),p.start&&Q(t).format("YYYY-MM-DD")==Q(e).format("YYYY-MM-DD")?Z(this).addClass("first-date-selected"):Z(this).removeClass("first-date-selected"),p.end&&Q(a).format("YYYY-MM-DD")==Q(e).format("YYYY-MM-DD")?Z(this).addClass("last-date-selected"):Z(this).removeClass("last-date-selected")}),m.find(".week-number").each(function(){Z(this).attr("data-start-time")==p.startWeek&&Z(this).addClass("week-number-selected")}))}function z(e,t){var a=function(e,t){var a=(e=Q(e)).get("month"),n='<div class="month-element">'+A(a)+"</div>";if(!p.monthSelect)return n;var r=!!p.startDate&&Q(p.startDate).add(p.singleMonth||"month2"!==t?0:1,"month"),s=!!p.endDate&&Q(p.endDate).add(p.singleMonth||"month1"!==t?0:-1,"month"),i=r&&e.isSame(r,"year")?r.get("month"):0,o=s&&e.isSame(s,"year")?s.get("month"):11,d=Math.min(i,a),l=Math.max(o,a);if(d===l)return n;return P("month",V({minSelectable:i,maxSelectable:o,minVisible:d,maxVisible:l},a,function(e){return A(e)}))}(e=Q(e).toDate(),t),n=function(e,t){var a=(e=Q(e)).get("year"),n='<div class="month-element">'+a+"</div>";if(!p.yearSelect)return n;var r=p.yearSelect&&"function"==typeof p.yearSelect,s=!!p.startDate&&Q(p.startDate).add(p.singleMonth||"month2"!==t?0:1,"month"),i=!!p.endDate&&Q(p.endDate).add(p.singleMonth||"month1"!==t?0:-1,"month"),o=r?p.yearSelect(a):p.yearSelect.slice(),d=s?Math.max(o[0],s.get("year")):Math.min(o[0],a),l=i?Math.min(o[1],i.get("year")):Math.max(o[1],a),u=Math.min(d,a),m=Math.max(l,a);if(u===m)return n;return P("year",V({minSelectable:d,maxSelectable:l,minVisible:u,maxVisible:m},a))}(e,t);m.find("."+t+" .month-name").html(a+" "+n),m.find("."+t+" tbody").html(function(e){var t=[];e.setDate(1);new Date(e.getTime()-864e5);var a,n,r=new Date,s=e.getDay();0===s&&"monday"===p.startOfWeek&&(s=7);if(0<s)for(var i=s;0<i;i--){var o=new Date(e.getTime()-864e5*i);n=k(o.getTime()),p.startDate&&F(o,p.startDate)<0&&(n=!1),p.endDate&&0<F(o,p.endDate)&&(n=!1),t.push({date:o,type:"lastMonth",day:o.getDate(),time:o.getTime(),valid:n})}for(var d=e.getMonth(),i=0;i<40;i++)a=Q(e).add(i,"days").toDate(),n=k(a.getTime()),p.startDate&&F(a,p.startDate)<0&&(n=!1),p.endDate&&0<F(a,p.endDate)&&(n=!1),t.push({date:a,type:a.getMonth()==d?"toMonth":"nextMonth",day:a.getDate(),time:a.getTime(),valid:n});for(var l=[],u=0;u<6&&"nextMonth"!=t[7*u].type;u++){l.push("<tr>");for(var o=0;o<7;o++){var m="monday"==p.startOfWeek?o+1:o;a=t[7*u+m];var h=Q(a.time).format("L")==Q(r).format("L");if(a.extraClass="",a.tooltip="",a.valid&&p.beforeShowDay&&"function"==typeof p.beforeShowDay){var c=p.beforeShowDay(Q(a.time).toDate());a.valid=c[0],a.extraClass=c[1]||"",a.tooltip=c[2]||"",""!==a.tooltip&&(a.extraClass+=" has-tooltip ")}var f={time:a.time,"data-tooltip":a.tooltip,class:"day "+a.type+" "+a.extraClass+" "+(a.valid?"valid":"invalid")+" "+(h?"real-today":"")};0===o&&p.showWeekNumbers&&l.push('<td><div class="week-number" data-start-time="'+a.time+'">'+p.getWeekNumber(a.date)+"</div></td>"),l.push("<td "+$({},p.dayTdAttrs,a)+"><div "+$(f,p.dayDivAttrs,a)+">"+J(a.time,a.day)+"</div></td>")}l.push("</tr>")}return l.join("")}(e)),p[t]=e,w(),m.find(".day").off("click").click(function(e){g(Z(this))}),m.find(".day").off("mouseenter").mouseenter(function(e){y(Z(this))}),m.find(".day").off("mouseleave").mouseleave(function(e){m.find(".date-range-length-tip").hide(),p.singleDate&&b()}),m.find(".week-number").off("click").click(function(e){var t,a,n,r;t=Z(this),r=parseInt(t.attr("data-start-time"),10),p.startWeek?(m.find(".week-number-selected").removeClass("week-number-selected"),a=new Date(r<p.startWeek?r:p.startWeek),n=new Date(r<p.startWeek?p.startWeek:r),p.startWeek=!1,p.start=Q(a).day("monday"==p.startOfWeek?1:0).valueOf(),p.end=Q(n).day("monday"==p.startOfWeek?7:6).valueOf()):(p.startWeek=r,t.addClass("week-number-selected"),a=new Date(r),p.start=Q(a).day("monday"==p.startOfWeek?1:0).valueOf(),p.end=Q(a).day("monday"==p.startOfWeek?7:6).valueOf()),w(),M(),S(),j(),x()}),m.find(".month").off("change").change(function(e){D(Z(this))}),m.find(".year").off("change").change(function(e){D(Z(this))})}function V(e,t,a){var n=[];a=a||function(e){return e};for(var r=e.minVisible;r<=e.maxVisible;r++)n.push({value:r,text:a(r),selected:r===t,disabled:r<e.minSelectable||r>e.maxSelectable});return n}function P(e,t){for(var a,n='<div class="select-wrapper"><select class="'+e+'" name="'+e+'">',r=0,s=t.length;r<s;r++){var i=t[r];n+='<option value="'+i.value+'"'+(i.selected?" selected":"")+(i.disabled?" disabled":"")+">"+i.text+"</option>",i.selected&&(a=i.text)}return n+="</select>"+a+"</div>"}function Y(e,t){m.find("."+t).append("<div><span>"+K("Time")+': <span class="hour-val">00</span>:<span class="minute-val">00</span></span></div><div class="hour"><label>'+K("Hour")+': <input type="range" class="hour-range" name="hour" min="0" max="23"></label></div><div class="minute"><label>'+K("Minute")+': <input type="range" class="minute-range" name="minute" min="0" max="59"></label></div>'),u(t,e)}function A(e){return K("month-name")[e]}function W(e){return Q(e).format(p.format)}function I(){j();var e=parseInt(Q(p.month1).format("YYYYMM")),t=parseInt(Q(p.month2).format("YYYYMM")),a=Math.abs(e-t);1<a&&89!=a?m.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility","visible"):m.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility","hidden");var n=m.find("table.month1").height(),r=m.find("table.month2").height();m.find(".gap").height(Math.max(n,r)+10)}function N(){if(!p.alwaysOpen){var e=function(){Z(n).data("date-picker-opened",!1),Z(n).trigger("datepicker-closed",{relatedTarget:m})};p.customCloseAnimation?p.customCloseAnimation.call(m.get(0),e):Z(m).slideUp(p.duration,e),Z(n).trigger("datepicker-close",{relatedTarget:m})}}function B(){z(p.month1,"month1"),z(p.month2,"month2")}function L(e,t){var a=parseInt(Q(e).format("YYYYMM"))-parseInt(Q(t).format("YYYYMM"));return 0<a?1:0===a?0:-1}function F(e,t){var a=parseInt(Q(e).format("YYYYMMDD"))-parseInt(Q(t).format("YYYYMMDD"));return 0<a?1:0===a?0:-1}function H(e){return Q(e).add(1,"months").toDate()}function R(e){return Q(e).add(-1,"months").toDate()}function E(){var e=p.showWeekNumbers?"<th>"+K("week-number")+"</th>":"";return"monday"==p.startOfWeek?e+"<th>"+K("week-1")+"</th><th>"+K("week-2")+"</th><th>"+K("week-3")+"</th><th>"+K("week-4")+"</th><th>"+K("week-5")+"</th><th>"+K("week-6")+"</th><th>"+K("week-7")+"</th>":e+"<th>"+K("week-7")+"</th><th>"+K("week-1")+"</th><th>"+K("week-2")+"</th><th>"+K("week-3")+"</th><th>"+K("week-4")+"</th><th>"+K("week-5")+"</th><th>"+K("week-6")+"</th>"}function q(e){return e=Q(e),!(!p.startDate||!e.endOf("month").isBefore(p.startDate))||!(!p.endDate||!e.startOf("month").isAfter(p.endDate))}function $(e,t,r){var s=Z.extend(!0,{},e);Z.each(t,function(e,t){var a=t(r);for(var n in a)s.hasOwnProperty(n)?s[n]+=a[n]:s[n]=a[n]});var a="";for(var n in s)s.hasOwnProperty(n)&&(a+=n+'="'+s[n]+'" ');return a}function J(e,t){return p.showDateFilter&&"function"==typeof p.showDateFilter?p.showDateFilter(e,t):t}function K(e){var t=e.toLowerCase(),a=e in r?r[e]:t in r?r[t]:null,n=Z.dateRangePickerLanguages.default;return null==a&&(a=e in n?n[e]:t in n?n[t]:""),a}function _(){var e=p.defaultTime?p.defaultTime:new Date;return p.lookBehind?(p.startDate&&L(e,p.startDate)<0&&(e=H(Q(p.startDate).toDate())),p.endDate&&0<L(e,p.endDate)&&(e=Q(p.endDate).toDate())):(p.startDate&&L(e,p.startDate)<0&&(e=Q(p.startDate).toDate()),p.endDate&&0<L(H(e),p.endDate)&&(e=R(Q(p.endDate).toDate()))),p.singleDate&&(p.startDate&&L(e,p.startDate)<0&&(e=Q(p.startDate).toDate()),p.endDate&&0<L(e,p.endDate)&&(e=Q(p.endDate).toDate())),e}function G(e){e||(e=_()),p.lookBehind?(z(R(e),"month1"),z(e,"month2")):(z(e,"month1"),z(H(e),"month2")),p.singleDate&&z(e,"month1"),j(),I()}function U(e){var t,a;t=e,(a=n[0]).contains(t.target)||t.target==a||null!=a.childNodes&&0<=Z.inArray(t.target,a.childNodes)||m.is(":visible")&&N()}}});

/**
 * jquery-date-range-picker
 * @version v0.16.1
 * @link https://github.com/longbill/jquery-date-range-picker
 * @license MIT
 */
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("moment")) : e(jQuery, moment)
}(function (e, t) {
    "use strict";
    e.dateRangePickerLanguages = {
        default: {
            selected: "Выбрано",
            day: "день",
            days: "дней",
            apply: "",
            "week-1": "пн",
            "week-2": "вт",
            "week-3": "ср",
            "week-4": "чт",
            "week-5": "пт",
            "week-6": "сб",
            "week-7": "вс",
            "month-name": ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
            shortcuts: "Быстрый выбор",
            "custom-values": "Пользовательские значения",
            past: "Прошедшие",
            following: "Следующие",
            previous: "",
            "prev-week": "Неделя",
            "prev-month": "Месяц",
            "prev-year": "Год",
            next: "",
            "next-week": "Неделя",
            "next-month": "Месяц",
            "next-year": "Год",
            "less-than": "Диапазон не может быть больше %d дней",
            "more-than": "Диапазон не может быть меньше %d дней",
            "default-more": "Пожалуйста выберите диапазон больше %d дней",
            "default-single": "Пожалуйста выберите дату",
            "default-less": "Пожалуйста выберите диапазон меньше %d дней",
            "default-range": "Пожалуйста выберите диапазон между %d и %d днями",
            "default-default": "Пожалуйста выберите диапазон",
            time: "Время",
            hour: "Часы",
            minute: "Минуты"
        },
    }, e.fn.dateRangePicker = function (a) {
        function n() {
            if (!a.inline) {
                var t = e(U).offset();
                if ("relative" == e(a.container).css("position")) {
                    var n = e(a.container).offset(), r = Math.max(0, t.left + J.outerWidth() - e("body").width() + 16);
                    J.css({top: t.top - n.top + e(U).outerHeight() + 4, left: t.left - n.left - r})
                } else t.left < 460 ? J.css({
                    top: t.top + e(U).outerHeight() + parseInt(e("body").css("border-top") || 0, 10),
                    left: t.left
                }) : J.css({
                    top: t.top + e(U).outerHeight() + parseInt(e("body").css("border-top") || 0, 10),
                    left: t.left + e(U).width() - J.width() - 16
                })
            }
        }

        function r(t) {
            A(), s(), a.customOpenAnimation ? a.customOpenAnimation.call(J.get(0), function () {
                e(U).trigger("datepicker-opened", {relatedTarget: J})
            }) : J.slideDown(t, function () {
                e(U).trigger("datepicker-opened", {relatedTarget: J})
            }), e(U).trigger("datepicker-open", {relatedTarget: J}), V(), o(), n()
        }

        function s() {
            var e = a.getValue.call(Z), n = e ? e.split(a.separator) : "";
            if (n && (1 == n.length && a.singleDate || n.length >= 2)) {
                var r = a.format;
                r.match(/Do/) && (r = r.replace(/Do/, "D"), n[0] = n[0].replace(/(\d+)(th|nd|st)/, "$1"), n.length >= 2 && (n[1] = n[1].replace(/(\d+)(th|nd|st)/, "$1"))), G = !1, n.length >= 2 ? x(i(n[0], r, t.locale(a.language)), i(n[1], r, t.locale(a.language))) : 1 == n.length && a.singleDate && M(i(n[0], r, t.locale(a.language))), G = !0
            }
        }

        function i(e, a, n) {
            return t(e, a, n).isValid() ? t(e, a, n).toDate() : t().toDate()
        }

        function o() {
            var e = J.find(".gap").css("margin-left");
            e && (e = parseInt(e));
            var t = J.find(".month1").width(), a = J.find(".gap").width() + (e ? 2 * e : 0),
                n = J.find(".month2").width();
            J.find(".month-wrapper").width(t + a + n)
        }

        function d(e, a) {
            J.find("." + e + " input[type=range].hour-range").val(t(a).hours()), J.find("." + e + " input[type=range].minute-range").val(t(a).minutes()), u(e, t(a).format("HH"), t(a).format("mm"))
        }

        function l(e, n) {
            a[e] = parseInt(t(parseInt(n)).startOf("day").add(t(a[e + "Time"]).format("HH"), "h").add(t(a[e + "Time"]).format("mm"), "m").valueOf())
        }

        function u(e, n, r) {
            function s(e, t) {
                var s = t.format("HH"), i = t.format("mm");
                a[e] = t.startOf("day").add(n || s, "h").add(r || i, "m").valueOf()
            }

            switch (n && J.find("." + e + " .hour-val").text(n), r && J.find("." + e + " .minute-val").text(r), e) {
                case"time1":
                    a.start && s("start", t(a.start)), s("startTime", t(a.startTime || t().valueOf()));
                    break;
                case"time2":
                    a.end && s("end", t(a.end)), s("endTime", t(a.endTime || t().valueOf()))
            }
            y(), b(), S()
        }

        function m(e) {
            var n = e;
            return "week-range" === a.batchMode ? n = "monday" === a.startOfWeek ? t(parseInt(e)).startOf("isoweek").valueOf() : t(parseInt(e)).startOf("week").valueOf() : "month-range" === a.batchMode && (n = t(parseInt(e)).startOf("month").valueOf()), n
        }

        function h(e) {
            var n = e;
            return "week-range" === a.batchMode ? n = "monday" === a.startOfWeek ? t(parseInt(e)).endOf("isoweek").valueOf() : t(parseInt(e)).endOf("week").valueOf() : "month-range" === a.batchMode && (n = t(parseInt(e)).endOf("month").valueOf()), n
        }

        function c(n) {
            if (!n.hasClass("invalid")) {
                var r = n.attr("time");
                if (n.addClass("checked"), a.singleDate ? (a.start = r, a.end = !1) : "week" === a.batchMode ? "monday" === a.startOfWeek ? (a.start = t(parseInt(r)).startOf("isoweek").valueOf(), a.end = t(parseInt(r)).endOf("isoweek").valueOf()) : (a.end = t(parseInt(r)).endOf("week").valueOf(), a.start = t(parseInt(r)).startOf("week").valueOf()) : "workweek" === a.batchMode ? (a.start = t(parseInt(r)).day(1).valueOf(), a.end = t(parseInt(r)).day(5).valueOf()) : "weekend" === a.batchMode ? (a.start = t(parseInt(r)).day(6).valueOf(), a.end = t(parseInt(r)).day(7).valueOf()) : "month" === a.batchMode ? (a.start = t(parseInt(r)).startOf("month").valueOf(), a.end = t(parseInt(r)).endOf("month").valueOf()) : a.start && a.end || !a.start && !a.end ? (a.start = m(r), a.end = !1) : a.start && (a.end = h(r), a.time.enabled && l("end", a.end)), a.time.enabled && (a.start && l("start", a.start), a.end && l("end", a.end)), !a.singleDate && a.start && a.end && a.start > a.end) {
                    var s = a.end;
                    a.end = h(a.start), a.start = m(s), a.time.enabled && a.swapTime && (d("time1", a.start), d("time2", a.end))
                }
                a.start = parseInt(a.start), a.end = parseInt(a.end), g(), a.start && !a.end && (e(U).trigger("datepicker-first-date-selected", {date1: new Date(a.start)}), v(n)), f(), y(), b(), S(), w()
            }
        }

        function p(e) {
            if (e = parseInt(e, 10), a.startDate && I(e, a.startDate) < 0) return !1;
            if (a.endDate && I(e, a.endDate) > 0) return !1;
            if (a.start && !a.end && !a.singleDate) {
                if (a.maxDays > 0 && D(e, a.start) > a.maxDays) return !1;
                if (a.minDays > 0 && D(e, a.start) < a.minDays) return !1;
                if (a.selectForward && e < a.start) return !1;
                if (a.selectBackward && e > a.start) return !1;
                if (a.beforeShowDay && "function" == typeof a.beforeShowDay) {
                    for (var t = !0, n = e; D(n, a.start) > 1;) {
                        if (!a.beforeShowDay(new Date(n))[0]) {
                            t = !1;
                            break
                        }
                        if (Math.abs(n - a.start) < 864e5) break;
                        n > a.start && (n -= 864e5), n < a.start && (n += 864e5)
                    }
                    if (!t) return !1
                }
            }
            return !0
        }

        function f() {
            return J.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"), a.start && !a.end && J.find(".day.toMonth.valid").each(function () {
                p(parseInt(e(this).attr("time"), 10)) ? e(this).addClass("valid tmp").removeClass("invalid") : e(this).addClass("invalid tmp").removeClass("valid")
            }), !0
        }

        function v(t) {
            var n = parseInt(t.attr("time")), r = "";
            if (t.hasClass("has-tooltip") && t.attr("data-tooltip")) r = '<span class="tooltip-content">' + t.attr("data-tooltip") + "</span>"; else if (!t.hasClass("invalid")) if (a.singleDate) J.find(".day.hovering").removeClass("hovering"), t.addClass("hovering"); else if (J.find(".day").each(function () {
                    var t = parseInt(e(this).attr("time"));
                    a.start, a.end;
                    t == n ? e(this).addClass("hovering") : e(this).removeClass("hovering"), a.start && !a.end && (a.start < t && n >= t || a.start > t && n <= t) ? e(this).addClass("hovering") : e(this).removeClass("hovering")
                }), a.start && !a.end) {
                var s = D(n, a.start);
                a.hoveringTooltip && ("function" == typeof a.hoveringTooltip ? r = a.hoveringTooltip(s, a.start, n) : !0 === a.hoveringTooltip && s > 1 && (r = s + " " + E("days")))
            }
            if (r) {
                var i = t.offset(), o = J.offset(), d = i.left - o.left, l = i.top - o.top;
                d += t.width() / 2;
                var u = J.find(".date-range-length-tip"),
                    m = u.css({visibility: "hidden", display: "none"}).html(r).width(), h = u.height();
                d -= m / 2, l -= h, setTimeout(function () {
                    u.css({left: d, top: l, display: "block", visibility: "visible"})
                }, 10)
            } else J.find(".date-range-length-tip").hide()
        }

        function g() {
            J.find(".day.hovering").removeClass("hovering"), J.find(".date-range-length-tip").hide()
        }

        function k(e) {
            var n = e.val(), r = e.attr("name"), s = e.parents("table").hasClass("month1") ? "month1" : "month2",
                i = "month1" === s ? "month2" : "month1", o = !!a.startDate && t(a.startDate),
                d = !!a.endDate && t(a.endDate), l = t(a[s])[r](n);
            o && l.isSameOrBefore(o) && (l = o.add("month2" === s ? 1 : 0, "month")), d && l.isSameOrAfter(d) && (l = d.add(a.singleMonth || "month1" !== s ? 0 : -1, "month")), T(l, s), "month1" === s ? (a.stickyMonths || t(l).isSameOrAfter(a[i], "month")) && T(t(l).add(1, "month"), i) : (a.stickyMonths || t(l).isSameOrBefore(a[i], "month")) && T(t(l).add(-1, "month"), i), V()
        }

        function w() {
            !0 === a.singleDate ? G && a.start && a.autoClose && Y() : G && a.start && a.end && a.autoClose && Y()
        }

        function y() {
            var e = Math.ceil((a.end - a.start) / 864e5) + 1;
            a.singleDate ? a.start && !a.end ? J.find(".drp_top-bar").removeClass("error").addClass("normal") : J.find(".drp_top-bar").removeClass("error").removeClass("normal") : a.maxDays && e > a.maxDays ? (a.start = !1, a.end = !1, J.find(".day").removeClass("checked"), J.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(E("less-than").replace("%d", a.maxDays))) : a.minDays && e < a.minDays ? (a.start = !1, a.end = !1, J.find(".day").removeClass("checked"), J.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(E("more-than").replace("%d", a.minDays))) : a.start || a.end ? J.find(".drp_top-bar").removeClass("error").addClass("normal") : J.find(".drp_top-bar").removeClass("error").removeClass("normal"), a.singleDate && a.start && !a.end || !a.singleDate && a.start && a.end ? J.find(".apply-btn").removeClass("disabled") : J.find(".apply-btn").addClass("disabled"), a.batchMode && (a.start && a.startDate && I(a.start, a.startDate) < 0 || a.end && a.endDate && I(a.end, a.endDate) > 0) && (a.start = !1, a.end = !1, J.find(".day").removeClass("checked"))
        }

        function b(t, n) {
            J.find(".start-day").html("..."), J.find(".end-day").html("..."), J.find(".selected-days").hide(), a.start && J.find(".start-day").html(P(new Date(parseInt(a.start)))), a.end && J.find(".end-day").html(P(new Date(parseInt(a.end))));
            var r;
            a.start && a.singleDate ? (J.find(".apply-btn").removeClass("disabled"), r = P(new Date(a.start)), a.setValue.call(Z, r, P(new Date(a.start)), P(new Date(a.end))), G && !n && e(U).trigger("datepicker-change", {
                value: r,
                date1: new Date(a.start)
            })) : a.start && a.end ? (J.find(".selected-days").show().find(".selected-days-num").html(D(a.end, a.start)), J.find(".apply-btn").removeClass("disabled"), r = P(new Date(a.start)) + a.separator + P(new Date(a.end)), a.setValue.call(Z, r, P(new Date(a.start)), P(new Date(a.end))), G && !n && e(U).trigger("datepicker-change", {
                value: r,
                date1: new Date(a.start),
                date2: new Date(a.end)
            })) : t ? J.find(".apply-btn").removeClass("disabled") : J.find(".apply-btn").addClass("disabled")
        }

        function D(e, t) {
            return Math.abs(R(e) - R(t)) + 1
        }

        function x(e, t, n) {
            if (e.getTime() > t.getTime()) {
                var r = t;
                t = e, e = r, r = null
            }
            var s = !0;
            if (a.startDate && I(e, a.startDate) < 0 && (s = !1), a.endDate && I(t, a.endDate) > 0 && (s = !1), !s) return T(a.startDate, "month1"), T(N(a.startDate), "month2"), void V();
            a.start = e.getTime(), a.end = t.getTime(), a.time.enabled && (d("time1", e), d("time2", t)), (a.stickyMonths || I(e, t) > 0 && 0 === W(e, t)) && (a.lookBehind ? e = B(t) : t = N(e)), a.stickyMonths && !1 !== a.endDate && W(t, a.endDate) > 0 && (e = B(e), t = B(t)), a.stickyMonths || 0 === W(e, t) && (a.lookBehind ? e = B(t) : t = N(e)), T(e, "month1"), T(t, "month2"), V(), y(), b(!1, n), w()
        }

        function M(e) {
            var t = !0;
            if (a.startDate && I(e, a.startDate) < 0 && (t = !1), a.endDate && I(e, a.endDate) > 0 && (t = !1), t) {
                if (a.start = e.getTime(), a.time.enabled && d("time1", e), T(e, "month1"), !0 !== a.singleMonth) {
                    T(N(e), "month2")
                }
                V(), b(), w()
            } else T(a.startDate, "month1")
        }

        function S() {
            (a.start || a.end) && (J.find(".day").each(function () {
                var n = parseInt(e(this).attr("time")), r = a.start, s = a.end;
                a.time.enabled && (n = t(n).startOf("day").valueOf(), r = t(r || t().valueOf()).startOf("day").valueOf(), s = t(s || t().valueOf()).startOf("day").valueOf()), a.start && a.end && s >= n && r <= n || a.start && !a.end && t(r).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("checked") : e(this).removeClass("checked"), a.start && t(r).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("first-date-selected") : e(this).removeClass("first-date-selected"), a.end && t(s).format("YYYY-MM-DD") == t(n).format("YYYY-MM-DD") ? e(this).addClass("last-date-selected") : e(this).removeClass("last-date-selected")
            }), J.find(".week-number").each(function () {
                e(this).attr("data-start-time") == a.startWeek && e(this).addClass("week-number-selected")
            }))
        }

        function T(n, r) {
            var s = function (e, n) {
                var r, s = !!a.startDate && t(a.startDate).add(a.singleMonth || "month2" !== n ? 0 : 1, "month"),
                    i = !!a.endDate && t(a.endDate).add(a.singleMonth || "month1" !== n ? 0 : -1, "month");
                if (e = t(e), !a.monthSelect || s && i && s.isSame(i, "month")) return '<div class="month-element">' + z(e.get("month")) + "</div>";
                if ((r = [s && e.isSame(s, "year") ? s.get("month") : 0, i && e.isSame(i, "year") ? i.get("month") : 11])[0] === r[1]) return '<div class="month-element">' + z(e.get("month")) + "</div>";
                return O("month", C(r, e.get("month"), function (e) {
                    return z(e)
                }))
            }(n = t(n).toDate(), r), i = function (e, n) {
                e = t(e);
                var r, s = !!a.startDate && t(a.startDate).add(a.singleMonth || "month2" !== n ? 0 : 1, "month"),
                    i = !!a.endDate && t(a.endDate).add(a.singleMonth || "month1" !== n ? 0 : -1, "month"),
                    o = e.get("year"), d = a.yearSelect && "function" == typeof a.yearSelect;
                if (!a.yearSelect || s && i && s.isSame(t(i), "year")) return '<div class="month-element">' + o + "</div>";
                return r = d ? a.yearSelect(o) : a.yearSelect.slice(), r = [s ? Math.max(r[0], s.get("year")) : Math.min(r[0], o), i ? Math.min(r[1], i.get("year")) : Math.max(r[1], o)], O("year", C(r, o))
            }(n, r);
            J.find("." + r + " .month-name").html(s + " " + i), J.find("." + r + " tbody").html(function (e) {
                var n = [];
                e.setDate(1);
                new Date(e.getTime() - 864e5);
                var r = new Date, s = e.getDay();
                0 === s && "monday" === a.startOfWeek && (s = 7);
                var i, o;
                if (s > 0) for (var d = s; d > 0; d--) {
                    var l = new Date(e.getTime() - 864e5 * d);
                    o = p(l.getTime()), a.startDate && I(l, a.startDate) < 0 && (o = !1), a.endDate && I(l, a.endDate) > 0 && (o = !1), n.push({
                        date: l,
                        type: "lastMonth",
                        day: l.getDate(),
                        time: l.getTime(),
                        valid: o
                    })
                }
                for (var u = e.getMonth(), d = 0; d < 40; d++) i = t(e).add(d, "days").toDate(), o = p(i.getTime()), a.startDate && I(i, a.startDate) < 0 && (o = !1), a.endDate && I(i, a.endDate) > 0 && (o = !1), n.push({
                    date: i,
                    type: i.getMonth() == u ? "toMonth" : "nextMonth",
                    day: i.getDate(),
                    time: i.getTime(),
                    valid: o
                });
                for (var m = [], h = 0; h < 6 && "nextMonth" != n[7 * h].type; h++) {
                    m.push("<tr>");
                    for (var l = 0; l < 7; l++) {
                        var c = "monday" == a.startOfWeek ? l + 1 : l;
                        i = n[7 * h + c];
                        var f = t(i.time).format("L") == t(r).format("L");
                        if (i.extraClass = "", i.tooltip = "", i.valid && a.beforeShowDay && "function" == typeof a.beforeShowDay) {
                            var v = a.beforeShowDay(t(i.time).toDate());
                            i.valid = v[0], i.extraClass = v[1] || "", i.tooltip = v[2] || "", "" !== i.tooltip && (i.extraClass += " has-tooltip ")
                        }
                        var g = {
                            time: i.time,
                            "data-tooltip": i.tooltip,
                            class: "day " + i.type + " " + i.extraClass + " " + (i.valid ? "valid" : "invalid") + " " + (f ? "real-today" : "")
                        };
                        0 === l && a.showWeekNumbers && m.push('<td><div class="week-number" data-start-time="' + i.time + '">' + a.getWeekNumber(i.date) + "</div></td>"), m.push("<td " + H({}, a.dayTdAttrs, i) + "><div " + H(g, a.dayDivAttrs, i) + ">" + function (e, t) {
                            return a.showDateFilter && "function" == typeof a.showDateFilter ? a.showDateFilter(e, t) : t
                        }(i.time, i.day) + "</div></td>")
                    }
                    m.push("</tr>")
                }
                return m.join("")
            }(n)), a[r] = n, f(), J.find(".day").unbind("click").click(function (t) {
                c(e(this))
            }), J.find(".day").unbind("mouseenter").mouseenter(function (t) {
                v(e(this))
            }), J.find(".day").unbind("mouseleave").mouseleave(function (e) {
                J.find(".date-range-length-tip").hide(), a.singleDate && g()
            }), J.find(".week-number").unbind("click").click(function (n) {
                !function (e) {
                    var n, r, s = parseInt(e.attr("data-start-time"), 10);
                    a.startWeek ? (J.find(".week-number-selected").removeClass("week-number-selected"), n = new Date(s < a.startWeek ? s : a.startWeek), r = new Date(s < a.startWeek ? a.startWeek : s), a.startWeek = !1, a.start = t(n).day("monday" == a.startOfWeek ? 1 : 0).valueOf(), a.end = t(r).day("monday" == a.startOfWeek ? 7 : 6).valueOf()) : (a.startWeek = s, e.addClass("week-number-selected"), n = new Date(s), a.start = t(n).day("monday" == a.startOfWeek ? 1 : 0).valueOf(), a.end = t(n).day("monday" == a.startOfWeek ? 7 : 6).valueOf()), f(), y(), b(), S(), w()
                }(e(this))
            }), J.find(".month").unbind("change").change(function (t) {
                k(e(this))
            }), J.find(".year").unbind("change").change(function (t) {
                k(e(this))
            })
        }

        function C(e, t, a) {
            var n = [];
            a = a || function (e) {
                return e
            };
            for (var r = e[0]; r <= e[1]; r++) n.push({value: r, text: a(r), isCurrent: r === t});
            return n
        }

        function O(e, t) {
            for (var a, n = '<div class="select-wrapper"><select class="' + e + '" name="' + e + '">', r = 0, s = t.length; r < s; r++) n += '<option value="' + t[r].value + '"' + (t[r].isCurrent ? " selected" : "") + ">", n += t[r].text, n += "</option>", t[r].isCurrent && (a = t[r].text);
            return n += "</select>" + a + "</div>"
        }

        function j(e, t) {
            J.find("." + t).append("<div><span>" + E("Time") + ': <span class="hour-val">00</span>:<span class="minute-val">00</span></span></div><div class="hour"><label>' + E("Hour") + ': <input type="range" class="hour-range" name="hour" min="0" max="23"></label></div><div class="minute"><label>' + E("Minute") + ': <input type="range" class="minute-range" name="minute" min="0" max="59"></label></div>'), d(t, e)
        }

        function z(e) {
            return E("month-name")[e]
        }

        function P(e) {
            return t(e).format(a.format)
        }

        function V() {
            S();
            var e = parseInt(t(a.month1).format("YYYYMM")), n = parseInt(t(a.month2).format("YYYYMM")),
                r = Math.abs(e - n);
            r > 1 && 89 != r ? J.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility", "visible") : J.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility", "hidden");
            var s = J.find("table.month1").height(), i = J.find("table.month2").height();
            J.find(".gap").height(Math.max(s, i) + 10)
        }

        function Y() {
            if (!a.alwaysOpen) {
                var t = function () {
                    e(U).data("date-picker-opened", !1), e(U).trigger("datepicker-closed", {relatedTarget: J})
                };
                a.customCloseAnimation ? a.customCloseAnimation.call(J.get(0), t) : e(J).slideUp(a.duration, t), e(U).trigger("datepicker-close", {relatedTarget: J})
            }
        }

        function A() {
            T(a.month1, "month1"), T(a.month2, "month2")
        }

        function W(e, a) {
            var n = parseInt(t(e).format("YYYYMM")) - parseInt(t(a).format("YYYYMM"));
            return n > 0 ? 1 : 0 === n ? 0 : -1
        }

        function I(e, a) {
            var n = parseInt(t(e).format("YYYYMMDD")) - parseInt(t(a).format("YYYYMMDD"));
            return n > 0 ? 1 : 0 === n ? 0 : -1
        }

        function N(e) {
            return t(e).add(1, "months").toDate()
        }

        function B(e) {
            return t(e).add(-1, "months").toDate()
        }

        function L() {
            var e = a.showWeekNumbers ? "<th>" + E("week-number") + "</th>" : "";
            return "monday" == a.startOfWeek ? e + "<th>" + E("week-1") + "</th><th>" + E("week-2") + "</th><th>" + E("week-3") + "</th><th>" + E("week-4") + "</th><th>" + E("week-5") + "</th><th>" + E("week-6") + "</th><th>" + E("week-7") + "</th>" : e + "<th>" + E("week-7") + "</th><th>" + E("week-1") + "</th><th>" + E("week-2") + "</th><th>" + E("week-3") + "</th><th>" + E("week-4") + "</th><th>" + E("week-5") + "</th><th>" + E("week-6") + "</th>"
        }

        function F(e) {
            return e = t(e), !(!a.startDate || !e.endOf("month").isBefore(a.startDate)) || !(!a.endDate || !e.startOf("month").isAfter(a.endDate))
        }

        function H(t, a, n) {
            var r = e.extend(!0, {}, t);
            e.each(a, function (e, t) {
                var a = t(n);
                for (var s in a) r.hasOwnProperty(s) ? r[s] += a[s] : r[s] = a[s]
            });
            var s = "";
            for (var i in r) r.hasOwnProperty(i) && (s += i + '="' + r[i] + '" ');
            return s
        }

        function R(e) {
            return Math.floor(function (e) {
                t.isMoment(e) && (e = e.toDate().getTime());
                "object" == typeof e && e.getTime && (e = e.getTime());
                "string" != typeof e || e.match(/\d{13}/) || (e = t(e, a.format).toDate().getTime());
                return e = parseInt(e, 10) - 60 * (new Date).getTimezoneOffset() * 1e3
            }(e) / 864e5)
        }

        function E(t) {
            var a = t.toLowerCase(), n = t in _ ? _[t] : a in _ ? _[a] : null, r = e.dateRangePickerLanguages.default;
            return null == n && (n = t in r ? r[t] : a in r ? r[a] : ""), n
        }

        function q() {
            var e = a.defaultTime ? a.defaultTime : new Date;
            return a.lookBehind ? (a.startDate && W(e, a.startDate) < 0 && (e = N(t(a.startDate).toDate())), a.endDate && W(e, a.endDate) > 0 && (e = t(a.endDate).toDate())) : (a.startDate && W(e, a.startDate) < 0 && (e = t(a.startDate).toDate()), a.endDate && W(N(e), a.endDate) > 0 && (e = B(t(a.endDate).toDate()))), a.singleDate && (a.startDate && W(e, a.startDate) < 0 && (e = t(a.startDate).toDate()), a.endDate && W(e, a.endDate) > 0 && (e = t(a.endDate).toDate())), e
        }

        function $(e) {
            e || (e = q()), a.lookBehind ? (T(B(e), "month1"), T(e, "month2")) : (T(e, "month1"), T(N(e), "month2")), a.singleDate && T(e, "month1"), S(), V()
        }

        a || (a = {}), (a = e.extend(!0, {
            autoClose: !1,
            format: "YYYY-MM-DD",
            separator: " to ",
            language: "auto",
            startOfWeek: "sunday",
            getValue: function () {
                return e(this).val()
            },
            setValue: function (t) {
                e(this).attr("readonly") || e(this).is(":disabled") || t == e(this).val() || e(this).val(t)
            },
            startDate: !1,
            endDate: !1,
            time: {enabled: !1},
            minDays: 0,
            maxDays: 0,
            showShortcuts: !1,
            shortcuts: {},
            customShortcuts: [],
            inline: !1,
            container: "body",
            alwaysOpen: !1,
            singleDate: !1,
            lookBehind: !1,
            batchMode: !1,
            duration: 200,
            stickyMonths: !1,
            dayDivAttrs: [],
            dayTdAttrs: [],
            selectForward: !1,
            selectBackward: !1,
            applyBtnClass: "",
            singleMonth: "auto",
            hoveringTooltip: function (e, t, a) {
                return e > 1 ? e + " " + E("days") : ""
            },
            showTopbar: !0,
            swapTime: !1,
            showWeekNumbers: !1,
            getWeekNumber: function (e) {
                return t(e).format("w")
            },
            customOpenAnimation: null,
            customCloseAnimation: null,
            customArrowPrevSymbol: null,
            customArrowNextSymbol: null,
            monthSelect: !1,
            yearSelect: !1
        }, a)).start = !1, a.end = !1, a.startWeek = !1, a.isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints, a.isTouchDevice && (a.hoveringTooltip = !1), "auto" == a.singleMonth && (a.singleMonth = e(window).width() < 480), a.singleMonth && (a.stickyMonths = !1), a.showTopbar || (a.autoClose = !0), a.startDate && "string" == typeof a.startDate && (a.startDate = t(a.startDate, a.format).toDate()), a.endDate && "string" == typeof a.endDate && (a.endDate = t(a.endDate, a.format).toDate()), a.yearSelect && "boolean" == typeof a.yearSelect && (a.yearSelect = function (e) {
            return [e - 5, e + 5]
        });
        var J, K, _ = function () {
            if ("auto" == a.language) {
                var t = navigator.language ? navigator.language : navigator.browserLanguage;
                return t && (t = t.toLowerCase()) in e.dateRangePickerLanguages ? e.dateRangePickerLanguages[t] : e.dateRangePickerLanguages.default
            }
            return a.language && a.language in e.dateRangePickerLanguages ? e.dateRangePickerLanguages[a.language] : e.dateRangePickerLanguages.default
        }(), G = !1, U = this, Z = e(U).get(0);
        return e(this).unbind(".datepicker").bind("click.datepicker", function (e) {
            J.is(":visible") || r(a.duration)
        }).bind("change.datepicker", function (e) {
            s()
        }).bind("keyup.datepicker", function () {
            try {
                clearTimeout(K)
            } catch (e) {
            }
            K = setTimeout(function () {
                s()
            }, 2e3)
        }), function () {
            var r = this;
            if (e(this).data("date-picker-opened")) Y(); else {
                e(this).data("date-picker-opened", !0), (J = function () {
                    var t = '<div class="date-picker-wrapper';
                    a.extraClass && (t += " " + a.extraClass + " "), a.singleDate && (t += " single-date "), a.showShortcuts || (t += " no-shortcuts "), a.showTopbar || (t += " no-topbar "), a.customTopBar && (t += " custom-topbar "), t += '">', a.showTopbar && (t += '<div class="drp_top-bar">', a.customTopBar ? ("function" == typeof a.customTopBar && (a.customTopBar = a.customTopBar()), t += '<div class="custom-top">' + a.customTopBar + "</div>") : (t += '<div class="normal-top"><span class="selection-top">' + E("selected") + ' </span> <b class="start-day">...</b>', a.singleDate || (t += ' <span class="separator-day">' + a.separator + '</span> <b class="end-day">...</b> <i class="selected-days"><span class="selected-days-num">3</span> ' + E("days") + "</i>"), t += "</div>", t += '<div class="error-top">error</div><div class="default-top">default</div>'), t += '<input type="button" class="apply-btn disabled' + function () {
                        var e = "";
                        return !0 === a.autoClose && (e += " hide"), "" !== a.applyBtnClass && (e += " " + a.applyBtnClass), e
                    }() + '" value="' + E("apply") + '" />', t += "</div>");
                    var n = a.showWeekNumbers ? 6 : 5, r = "";
                    a.customArrowPrevSymbol && (r = a.customArrowPrevSymbol);
                    var s = "";
                    if (a.customArrowNextSymbol && (s = a.customArrowNextSymbol), t += '<div class="month-wrapper">   <table class="month1" cellspacing="0" border="0" cellpadding="0">       <thead>           <tr class="caption">               <th>                   <span class="prev">' + r + '                   </span>               </th>               <th colspan="' + n + '" class="month-name">               </th>               <th>' + (a.singleDate || !a.stickyMonths ? '<span class="next">' + s + "</span>" : "") + '               </th>           </tr>           <tr class="week-name">' + L() + "       </thead>       <tbody></tbody>   </table>", a.singleMonth || (t += '<div class="gap">' + function () {
                            for (var e = ['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'], t = 0; t < 20; t++) e.push('<div class="gap-line"><div class="gap-1"></div><div class="gap-2"></div><div class="gap-3"></div></div>');
                            return e.push("</div>"), e.join("")
                        }() + '</div><table class="month2" cellspacing="0" border="0" cellpadding="0">   <thead>   <tr class="caption">       <th>' + (a.stickyMonths ? "" : '<span class="prev">' + r + "</span>") + '       </th>       <th colspan="' + n + '" class="month-name">       </th>       <th>           <span class="next">' + s + '</span>       </th>   </tr>   <tr class="week-name">' + L() + "   </thead>   <tbody></tbody></table>"), t += '<div class="dp-clearfix"></div><div class="time"><div class="time1"></div>', a.singleDate || (t += '<div class="time2"></div>'), t += '</div><div class="dp-clearfix"></div></div>', t += '<div class="footer">', a.showShortcuts) {
                        t += '<div class="shortcuts"><b>' + E("shortcuts") + "</b>";
                        var i = a.shortcuts;
                        if (i) {
                            var o;
                            if (i["prev-days"] && i["prev-days"].length > 0) {
                                t += '&nbsp;<span class="prev-days">' + E("past");
                                for (var d = 0; d < i["prev-days"].length; d++) o = i["prev-days"][d], o += i["prev-days"][d] > 1 ? E("days") : E("day"), t += ' <a href="javascript:;" shortcut="day,-' + i["prev-days"][d] + '">' + o + "</a>";
                                t += "</span>"
                            }
                            if (i["next-days"] && i["next-days"].length > 0) {
                                t += '&nbsp;<span class="next-days">' + E("following");
                                for (var d = 0; d < i["next-days"].length; d++) o = i["next-days"][d], o += i["next-days"][d] > 1 ? E("days") : E("day"), t += ' <a href="javascript:;" shortcut="day,' + i["next-days"][d] + '">' + o + "</a>";
                                t += "</span>"
                            }
                            if (i.prev && i.prev.length > 0) {
                                t += '&nbsp;<span class="prev-buttons">' + E("previous");
                                for (var d = 0; d < i.prev.length; d++) o = E("prev-" + i.prev[d]), t += ' <a href="javascript:;" shortcut="prev,' + i.prev[d] + '">' + o + "</a>";
                                t += "</span>"
                            }
                            if (i.next && i.next.length > 0) {
                                t += '&nbsp;<span class="next-buttons">' + E("next");
                                for (var d = 0; d < i.next.length; d++) o = E("next-" + i.next[d]), t += ' <a href="javascript:;" shortcut="next,' + i.next[d] + '">' + o + "</a>";
                                t += "</span>"
                            }
                        }
                        if (a.customShortcuts) for (var d = 0; d < a.customShortcuts.length; d++) {
                            var l = a.customShortcuts[d];
                            t += '&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">' + l.name + "</a></span>"
                        }
                        t += "</div>"
                    }
                    if (a.showCustomValues && (t += '<div class="customValues"><b>' + (a.customValueLabel || E("custom-values")) + "</b>", a.customValues)) for (var d = 0; d < a.customValues.length; d++) {
                        var u = a.customValues[d];
                        t += '&nbsp;<span class="custom-value"><a href="javascript:;" custom="' + u.value + '">' + u.name + "</a></span>"
                    }
                    return t += "</div></div>", e(t)
                }().hide()).append('<div class="date-range-length-tip"></div>'), e(a.container).append(J), a.inline ? J.addClass("inline-wrapper") : n(), a.alwaysOpen && J.find(".apply-btn").hide();
                var s = q();
                if ($(s), a.time.enabled) if (a.startDate && a.endDate || a.start && a.end) j(t(a.start || a.startDate).toDate(), "time1"), j(t(a.end || a.endDate).toDate(), "time2"); else {
                    var i = a.defaultEndTime ? a.defaultEndTime : s;
                    j(s, "time1"), j(i, "time2")
                }
                var d = "";
                d = a.singleDate ? E("default-single") : a.minDays && a.maxDays ? E("default-range") : a.minDays ? E("default-more") : a.maxDays ? E("default-less") : E("default-default"), J.find(".default-top").html(d.replace(/\%d/, a.minDays).replace(/\%d/, a.maxDays)), a.singleMonth ? J.addClass("single-month") : J.addClass("two-months"), setTimeout(function () {
                    o(), G = !0
                }, 0), J.click(function (e) {
                    e.stopPropagation()
                }), e(document).bind("click.datepicker", function (t) {
                    (function (t, a) {
                        return a.contains(t.target) || t.target == a || void 0 != a.childNodes && e.inArray(t.target, a.childNodes) >= 0
                    })(t, r[0]) || J.is(":visible") && Y()
                }), J.find(".next").click(function () {
                    a.stickyMonths ? function (e) {
                        var t = N(a.month1), n = N(a.month2);
                        F(n) || !a.singleDate && W(t, n) >= 0 || (T(t, "month1"), T(n, "month2"), S())
                    }() : function (t) {
                        var n = e(t).parents("table").hasClass("month2"), r = n ? a.month2 : a.month1;
                        r = N(r), !a.singleMonth && !a.singleDate && !n && W(r, a.month2) >= 0 || F(r) || (T(r, n ? "month2" : "month1"), V())
                    }(this)
                }), J.find(".prev").click(function () {
                    a.stickyMonths ? function (e) {
                        var t = B(a.month1), n = B(a.month2);
                        F(t) || !a.singleDate && W(n, t) <= 0 || (T(n, "month2"), T(t, "month1"), S())
                    }() : function (t) {
                        var n = e(t).parents("table").hasClass("month2"), r = n ? a.month2 : a.month1;
                        r = B(r), n && W(r, a.month1) <= 0 || F(r) || (T(r, n ? "month2" : "month1"), V())
                    }(this)
                }), J.attr("unselectable", "on").css("user-select", "none").bind("selectstart", function (e) {
                    return e.preventDefault(), !1
                }), J.find(".apply-btn").click(function () {
                    Y();
                    var t = P(new Date(a.start)) + a.separator + P(new Date(a.end));
                    e(r).trigger("datepicker-apply", {value: t, date1: new Date(a.start), date2: new Date(a.end)})
                }), J.find("[custom]").click(function () {
                    var t = e(this).attr("custom");
                    a.start = !1, a.end = !1, J.find(".day.checked").removeClass("checked"), a.setValue.call(Z, t), y(), b(!0), S(), a.autoClose && Y()
                }), J.find("[shortcut]").click(function () {
                    var t, n = e(this).attr("shortcut"), r = new Date, s = !1;
                    if (-1 != n.indexOf("day")) {
                        var i = parseInt(n.split(",", 2)[1], 10);
                        s = new Date((new Date).getTime() + 864e5 * i), r = new Date(r.getTime() + 864e5 * (i > 0 ? 1 : -1))
                    } else if (-1 != n.indexOf("week")) {
                        var o;
                        for (o = 1 == (t = -1 != n.indexOf("prev,") ? -1 : 1) ? "monday" == a.startOfWeek ? 1 : 0 : "monday" == a.startOfWeek ? 0 : 6, r = new Date(r.getTime() - 864e5); r.getDay() != o;) r = new Date(r.getTime() + 864e5 * t);
                        s = new Date(r.getTime() + 864e5 * t * 6)
                    } else if (-1 != n.indexOf("month")) (s = 1 == (t = -1 != n.indexOf("prev,") ? -1 : 1) ? N(r) : B(r)).setDate(1), (r = N(s)).setDate(1), r = new Date(r.getTime() - 864e5); else if (-1 != n.indexOf("year")) t = -1 != n.indexOf("prev,") ? -1 : 1, (s = new Date).setFullYear(r.getFullYear() + t), s.setMonth(0), s.setDate(1), r.setFullYear(r.getFullYear() + t), r.setMonth(11), r.setDate(31); else if ("custom" == n) {
                        var d = e(this).html();
                        if (a.customShortcuts && a.customShortcuts.length > 0) for (var l = 0; l < a.customShortcuts.length; l++) {
                            var u = a.customShortcuts[l];
                            if (u.name == d) {
                                var m = [];
                                if ((m = u.dates.call()) && 2 == m.length && (s = m[0], r = m[1]), m && 1 == m.length) {
                                    var h = m[0];
                                    T(h, "month1"), T(N(h), "month2"), V()
                                }
                                break
                            }
                        }
                    }
                    s && r && (x(s, r), y())
                }), J.find(".time1 input[type=range]").bind("change touchmove", function (t) {
                    var a = t.target;
                    u("time1", "hour" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0, "minute" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0)
                }), J.find(".time2 input[type=range]").bind("change touchmove", function (t) {
                    var a = t.target;
                    u("time2", "hour" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0, "minute" == a.name ? e(a).val().replace(/^(\d{1})$/, "0$1") : void 0)
                })
            }
        }.call(this), a.alwaysOpen && r(0), e(this).data("dateRangePicker", {
            setStart: function (e) {
                return "string" == typeof e && (e = t(e, a.format).toDate()), a.end = !1, M(e), this
            }, setEnd: function (e, n) {
                var r = new Date;
                return r.setTime(a.start), "string" == typeof e && (e = t(e, a.format).toDate()), x(r, e, n), this
            }, setDateRange: function (e, n, r) {
                "string" == typeof e && "string" == typeof n && (e = t(e, a.format).toDate(), n = t(n, a.format).toDate()), x(e, n, r)
            }, clear: function () {
                a.start = !1, a.end = !1, J.find(".day.checked").removeClass("checked"), J.find(".day.last-date-selected").removeClass("last-date-selected"), J.find(".day.first-date-selected").removeClass("first-date-selected"), a.setValue.call(Z, ""), y(), b(), S()
            }, close: Y, open: r, redraw: A, getDatePicker: function () {
                return J
            }, resetMonthsView: $, destroy: function () {
                e(U).unbind(".datepicker"), e(U).data("dateRangePicker", ""), e(U).data("date-picker-opened", null), J.remove(), e(window).unbind("resize.datepicker", n), e(document).unbind("click.datepicker", Y)
            }
        }), e(window).bind("resize.datepicker", n), this
    }
});
