  document.addEventListener('DOMContentLoaded', function() {
            const languageBtn = document.querySelector('.language-btn');
            const languageDropdown = document.querySelector('.language-dropdown');
            const languageOptions = document.querySelectorAll('.language-option');
            
            const translations = {
                en: {"home":"Home","about":"About","menu":"Menu","testimonials":"Testimonials","contact":"Contact","storyTitle":"The Story of U Cafe","challengeTitle":"The Challenge & The Idea","challengeText":"The story of U Cafe begins in Addis Ababa, at Ayer Amba Secondary School. The school cafeteria faced several challenges: pricing issues, limited menu options, inconsistent quality, and outdated payment methods. Recognizing these problems, a group of innovative Grade 11 Natural Science students from Room 01 decided to take action. Their vision was to create a modern solution that would transform the entire cafeteria experience.","solutionTitle":"The Solution: U Online Cafe","solutionText1":"From this vision, U Online Cafe was born. It is a modern online platform designed to improve every aspect of the school cafeteria. With U Online Cafe, the menu now offers a wider selection of quality items, and the payment system is fully cashless and convenient.","solutionText2":"The platform primarily serves teachers, staff, and the surrounding school community. Recognizing that students have limited access to devices, a special arrangement was made with the school director to allow students to place orders using the school's IT lab computers, ensuring everyone can benefit from this initiative.","foundersTitle":"Meet the Founders","premiumCoffee":"Premium coffee experience with handcrafted beverages, delicious pastries, and a cozy atmosphere.","quickLinks":"Quick Links","aboutUs":"About Us","ourMenu":"Our Menu","coffee":"Coffee","tea":"Tea","pastries":"Pastries","breakfast":"Breakfast","seasonalSpecials":"Seasonal Specials","newsletter":"Newsletter","subscribeText":"Subscribe to our newsletter for the latest updates and offers.","subscribe":"Subscribe","copyright":"© 2023 U Cafe. All Rights Reserved. Designed with"},
                am: {"home":"ዋና ገጽ","about":"ስለ እኛ","menu":"ምናሌ","testimonials":"የደንበኞች አስተያየት","contact":"ግንኙነት","storyTitle":"የዩ ካፌ ታሪክ","challengeTitle":"ተግዳሮቱ እና ሀሳቡ","challengeText":"የዩ ካፌ ታሪክ የሚጀምረው አዲስ አበባ፣ በአየር አምባ ሁለተኛ ደረጃ ትምህርት ቤት ነው። የትምህርት ቤቱ ካፌ በርካታ ተግዳሮቶች ነበሩበት፡ የዋጋ ጉዳዮች፣ የተወሰነ የምግብ ዝርዝር፣ ወጥነት የሌለው ጥራት እና ጊዜ ያለፈባቸው የአከፋፈል ዘዴዎች። እነዚህን ችግሮች በመገንዘብ፣ ከክፍል 01 የተውጣጡ የ11ኛ ክፍል የተፈጥሮ ሳይንስ ተማሪዎች ቡድን እርምጃ ለመውሰድ ወሰኑ። ራዕያቸው የመላው ካፌውን ልምድ የሚቀይር ዘመናዊ መፍትሄ መፍጠር ነበር።","solutionTitle":"መፍትሄው፡ ዩ ኦንላይን ካፌ","solutionText1":"ከዚህ ራዕይ በመነሳት ዩ ኦንላይን ካፌ ተወለደ። እሱም የትምህርት ቤቱን ካፌ እያንዳንዱን ገጽታ ለማሻሻል የተነደፈ ዘመናዊ የመስመር ላይ መድረክ ነው። በዩ ኦንላይን ካፌ፣ የምግብ ዝርዝሩ አሁን ሰፋ ያለ ጥራት ያላቸውን ምርቶች ያቀርባል፣ እና የአከፋፈል ስርዓቱ ሙሉ በሙሉ ጥሬ ገንዘብ አልባ እና ምቹ ነው።","solutionText2":"መድረኩ በዋነኝነት መምህራንን፣ ሰራተኞችን እና በአካባቢው ያለውን የትምህርት ቤት ማህበረሰብ ያገለግላል። ተማሪዎች የመሳሪያ አጠቃቀም ውስንነት እንዳለባቸው በመገንዘብ፣ ሁሉም ከዚህ ተነሳሽነት ተጠቃሚ እንዲሆኑ ከትምህርት ቤቱ ዳይሬክተር ጋር ልዩ ዝግጅት ተደርጎ ተማሪዎች የትምህርት ቤቱን የአይቲ ላብ ኮምፒውተሮች በመጠቀም ትዕዛዝ እንዲሰጡ ተደርጓል።","foundersTitle":"መስራቾቹን ይተዋወቁ","premiumCoffee":"በእጅ የተሰሩ መጠጦች፣ ጣፋጭ መጋገሪያዎች እና ምቹ ሁኔታ ያለው የፕሪሚየም ቡና ልምድ።","quickLinks":"ፈጣን አገናኞች","aboutUs":"ስለ እኛ","ourMenu":"የእኛ ምናሌ","coffee":"ቡና","tea":"ሻይ","pastries":"መጋገሪያዎች","breakfast":"ቁርስ","seasonalSpecials":"ወቅታዊ ልዩ","newsletter":"ጋዜጣ","subscribeText":"ለአዳዲስ ዝመናዎች እና ቅናሾች ለጋዜጣችን ይመዝገቡ።","subscribe":"ይመዝገቡ","copyright":"© 2023 ዩ ካፌ። መብቱ በህግ የተጠበቀ ነው. የተነደፈው በ"},
                om: {"home":"Fuullee","about":"Waa'ee Keenyaa","menu":"Baafata","testimonials":"Yaada Maamilaa","contact":"Nu Qunnamaa","storyTitle":"Seenaa U Cafe","challengeTitle":"Rakkoo fi Yaada","challengeText":"Seenaan U Cafe Finfinnee, Mana Barumsaa Sadarkaa Lammaffaa Ayer Ambaatti jalqaba. Kafeen mana barumsichaa rakkoolee hedduu qaba ture: rakkoo gatii, filannoo nyaataa murtaa'aa, qulqullina wal-gita hin taane, fi sirna kaffaltii moofa'aa. Rakkoolee kanneen hubachuun, gareen barattoota Saayinsii Uumamaa Kutaa 11ffaa kutaa 01 irraa ta'an tarkaanfii fudhachuuf murteessan. Mul'anni isaanii muuxannoo kafee guutuu kan jijjiiru furmaata ammayyaa uumuudha.","solutionTitle":"Furmaatichi: U Online Cafe","solutionText1":"Mul'ata kanarraa, U Online Cafe dhalate. Innis marsariitii ammayyaa kan gama hundaan kafee mana barumsichaa fooyyessuuf qophaa'edha. U Online Cafe'n, baafatni amma filannoo bal'aa meeshaalee qulqullina qaban dhiyeessa, sirni kaffaltii isaas guutummaatti calla-dhaan alaa fi salphaadha.","solutionText2":"Marsariitiin kun irra caalaatti barsiisota, hojjettoota, fi hawaasa mana barumsichaa naannoo sana jiru tajaajila. Barattoonni meeshaalee fayyadamuuf carraa murtaa'aa akka qaban hubachuun, hundi isaanii carraa kanarraa fayyadamoo akka ta'aniif daarektara mana barumsichaa waliin walii galtee addaa uumuun barattoonni kompiitara laabii IT mana barumsichaa fayyadamuun ajaja akka kennan taasifameera.","foundersTitle":"Hundeessitoota Waliin Wal Baraa","premiumCoffee":"Muuxannoo bunaa addaa kan dhugaatiiwwan harkan hojjetaman, daabboo mi'aawaa fi naannoo mijataa qabu.","quickLinks":"Ce'umsa Daddafaa","aboutUs":"Waa'ee Keenyaa","ourMenu":"Baafata Keenya","coffee":"Buna","tea":"Shaayee","pastries":"Daabboo","breakfast":"Ciree","seasonalSpecials":"Addaa yeroo","newsletter":"Maxxansa","subscribeText":"Odeeffannoowwanii fi dhiyeessiiwwan haaraa argachuuf maxxansa keenyaaf galmaa'aa.","subscribe":"Galmaa'i","copyright":"© 2023 U Cafe. Mirgi hundi seeraan eegamaadha. Kan hojjetame"},
            };
            
            languageBtn.addEventListener('click', () => languageDropdown.classList.toggle('show'));
            document.addEventListener('click', e => { if (!e.target.closest('.language-switcher')) languageDropdown.classList.remove('show'); });
            
            languageOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    changeLanguage(lang);
                    languageBtn.innerHTML = `${lang.toUpperCase()} <i class="fas fa-chevron-down"></i>`;
                    languageDropdown.classList.remove('show');
                });
            });
            
            function changeLanguage(lang) {
                const langData = translations[lang] || translations.en;
                document.querySelectorAll('[data-key]').forEach(element => {
                    const key = element.getAttribute('data-key');
                    if (langData[key]) {
                        if (key === 'copyright') {
                            element.innerHTML = langData[key] + ' <i class="fas fa-heart"></i>';
                        } else {
                            element.textContent = langData[key];
                        }
                    }
                });
            }
        });