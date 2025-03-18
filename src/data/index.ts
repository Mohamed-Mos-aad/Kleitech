// ** Interfaces
import { IAllowAndNotAllowData } from "../interfaces";






export const allowAndNotAllowData: IAllowAndNotAllowData = {
    allow: {
        food: ["الخضروات الورقية مثل السبانخ.",
            "التوت مثل التوت الأزرق.",
            "الدهون الصحية مثل زيت الزيتون والأفوكادو.",
            "السمك مثل السلمون والتونة.",
            "الدجاج المشوي أو المسلوق.",
            "المكسرات مثل اللوز والكاجو.",
            "الحبوب الكاملة مثل الشوفان.",
            "البقوليات مثل الفاصوليا والعدس.",
            "الفواكه منخفضة البوتاسيوم مثل التفاح والعنب.",
            "الحليب قليل الدسم أو البدائل النباتية مثل حليب اللوز.",
            "الفواكه منخفضة البوتاسيوم مثل التفاح والعنب."
        ],
        drinks: ["شاي الأعشاب مثل شاي النعناع أو الكاموميل.",
            "حليب جوز الهند غير المحلى.",
            "شاي التوت البري أو شاي الفواكه الطبيعية.",
            "ماء جوز الهند (بدون إضافات).",
            "شاي الأخضر (بكميات معتدلة).",
            "حليب جوز الهند غير المحلى.",
            "حليب اللوز غير المحلى.",
            "عصير التفاح الطبيعي (بدون سكر مضاف)."
        ]
    },
    notAllow: {
        food: ["اللحوم المدخنة.",
            "اللحوم الحمراء.",
            "الأطعمة المقلية.",
            "منتجات الألبان كاملة الدسم.",
            "الأطعمة الغنية بالفوسفور مثل الجبن.",
            "الأطعمة الغنية بالبوتاسيوم مثل الموز والبطاطس.",
            "الأطعمة المعلبة أو المعالجة.",
            "الفواكه الغنية بالبوتاسيوم مثل الموز والبرتقال.",
            "الأطعمة الغنية بالملح مثل الوجبات السريعة.",
            "الشوكولاتة (وخاصة الأنواع الغنية بالسكر).",
            "المكملات الغذائية المحتوية على الفوسفور."
        ],
        drinks: ["المشروبات الغازية مثل الكولا.",
            "عصير البرتقال (قد يحتوي على مستويات عالية من البوتاسيوم).",
            "عصير الموز (غني بالبوتاسيوم).",
            "القهوة (بكميات كبيرة، خاصة إذا كانت تحتوي على الكافيين).",
            "المشروبات المحلاة بالسكريات الصناعية مثل مشروبات الدايت.",
            "عصير الكرز (يحتوي على نسبة عالية من البوتاسيوم).",
            "عصير الخوخ (يحتوي على نسبة عالية من البوتاسيوم).",
            "عصير الفراولة (قد يحتوي على كميات عالية من البوتاسيوم)."
        ]
    }
}



export const doctorsData = {
    "doctors": [
    { "id": 1, "name": "دكتور أحمد علي", "specialty": "استشاري أمراض الكلى", "location": "القاهرة: مدينة نصر", "price": "٥٠٠ جنيه", "rating": { "avg_rating": 22, "visitors_count": 50 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 2, "name": "دكتوره سارة محمود", "specialty": "استشاري الطب النفسي", "location": "الإسكندرية: سموحة", "price": "٣٥٠ جنيه", "rating": { "avg_rating": 19, "visitors_count": 30 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 3, "name": "دكتور محمد سعيد", "specialty": "استشاري أمراض الكلى", "location": "الجيزة: الدقي", "price": "٤٠٠ جنيه", "rating": { "avg_rating": 20, "visitors_count": 40 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 4, "name": "دكتوره منى حسن", "specialty": "استشاري الطب النفسي", "location": "المنصورة: شارع الجمهورية", "price": "٣٢٠ جنيه", "rating": { "avg_rating": 18, "visitors_count": 28 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 5, "name": "دكتور خالد عبد الله", "specialty": "استشاري أمراض الكلى", "location": "طنطا: شارع الجيش", "price": "٤٥٠ جنيه", "rating": { "avg_rating": 21, "visitors_count": 35 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 6, "name": "دكتوره نادية فاروق", "specialty": "استشاري الطب النفسي", "location": "أسيوط: شارع الهلالي", "price": "٣٠٠ جنيه", "rating": { "avg_rating": 17, "visitors_count": 25 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 7, "name": "دكتور عمر يوسف", "specialty": "استشاري أمراض الكلى", "location": "الزقازيق: شارع فاروق", "price": "٤٧٠ جنيه", "rating": { "avg_rating": 23, "visitors_count": 38 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 8, "name": "دكتوره ياسمين أحمد", "specialty": "استشاري الطب النفسي", "location": "سوهاج: ميدان الثقافة", "price": "٣٣٠ جنيه", "rating": { "avg_rating": 19, "visitors_count": 30 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 9, "name": "دكتور محمود سامي", "specialty": "استشاري أمراض الكلى", "location": "دمياط: كورنيش النيل", "price": "٤٦٠ جنيه", "rating": { "avg_rating": 22, "visitors_count": 32 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 10, "name": "دكتوره هدى إبراهيم", "specialty": "استشاري الطب النفسي", "location": "الإسماعيلية: شارع الثلاثيني", "price": "٣٧٠ جنيه", "rating": { "avg_rating": 20, "visitors_count": 27 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 11, "name": "دكتور سعيد وليد", "specialty": "استشاري أمراض الكلى", "location": "شرم الشيخ: النور", "price": "٥٢٠ جنيه", "rating": { "avg_rating": 22, "visitors_count": 60 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 12, "name": "دكتوره إيمان أشرف", "specialty": "استشاري الطب النفسي", "location": "الغردقة: ميدان الدهار", "price": "٣٢٥ جنيه", "rating": { "avg_rating": 20, "visitors_count": 33 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 13, "name": "دكتور حسن عبد العزيز", "specialty": "استشاري أمراض الكلى", "location": "بني سويف: شارع النيل", "price": "٤٨٠ جنيه", "rating": { "avg_rating": 21, "visitors_count": 39 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 14, "name": "دكتوره فاطمة لطفي", "specialty": "استشاري الطب النفسي", "location": "قنا: ميدان السد العالي", "price": "٣٤٠ جنيه", "rating": { "avg_rating": 18, "visitors_count": 25 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 15, "name": "دكتور محمود أسامة", "specialty": "استشاري أمراض الكلى", "location": "الفيوم: ش الجلاء", "price": "٤٥٠ جنيه", "rating": { "avg_rating": 22, "visitors_count": 41 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 16, "name": "دكتوره هالة نبيل", "specialty": "استشاري الطب النفسي", "location": "السويس: شارع السلام", "price": "٣٢٠ جنيه", "rating": { "avg_rating": 19, "visitors_count": 35 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 17, "name": "دكتور وليد أشرف", "specialty": "استشاري أمراض الكلى", "location": "أسوان: كورنيش النيل", "price": "٤٨٠ جنيه", "rating": { "avg_rating": 20, "visitors_count": 30 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 18, "name": "دكتوره سارة شريف", "specialty": "استشاري الطب النفسي", "location": "الإسماعيلية: شارع الروضة", "price": "٣٥٠ جنيه", "rating": { "avg_rating": 21, "visitors_count": 38 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 19, "name": "دكتور عادل فهمي", "specialty": "استشاري أمراض الكلى", "location": "شبين الكوم: ميدان الجيش", "price": "٤٥٠ جنيه", "rating": { "avg_rating": 19, "visitors_count": 29 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 20, "name": "دكتوره ليلى فتحي", "specialty": "استشاري الطب النفسي", "location": "المحلة الكبرى: شارع بورسعيد", "price": "٣٣٠ جنيه", "rating": { "avg_rating": 18, "visitors_count": 26 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 21, "name": "دكتور عماد سمير", "specialty": "استشاري أمراض الكلى", "location": "قليوبية: ش شبرا", "price": "٤٦٠ جنيه", "rating": { "avg_rating": 22, "visitors_count": 40 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 22, "name": "دكتوره شرين توفيق", "specialty": "استشاري الطب النفسي", "location": "مرسى مطروح: ش 26 يوليو", "price": "٣٧٠ جنيه", "rating": { "avg_rating": 20, "visitors_count": 34 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 23, "name": "دكتور عبد الرحمن خالد", "specialty": "استشاري أمراض الكلى", "location": "البحيرة: ش التحرير", "price": "٤٧٠ جنيه", "rating": { "avg_rating": 21, "visitors_count": 35 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 24, "name": "دكتوره جهاد محسن", "specialty": "استشاري الطب النفسي", "location": "الأقصر: ميدان أبو الهول", "price": "٣٤٠ جنيه", "rating": { "avg_rating": 20, "visitors_count": 29 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 25, "name": "دكتور حسام فؤاد", "specialty": "استشاري أمراض الكلى", "location": "الخارج: شارع الماسورة", "price": "٤٨٠ جنيه", "rating": { "avg_rating": 22, "visitors_count": 32 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 26, "name": "دكتوره لمياء سليم", "specialty": "استشاري الطب النفسي", "location": "مسطرد: ش 23 يوليو", "price": "٣١٠ جنيه", "rating": { "avg_rating": 19, "visitors_count": 27 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 27, "name": "دكتور حسام رجب", "specialty": "استشاري أمراض الكلى", "location": "شبرا: ش السيدة زينب", "price": "٤٦٠ جنيه", "rating": { "avg_rating": 22, "visitors_count": 38 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 28, "name": "دكتوره فاطمة عبد الله", "specialty": "استشاري الطب النفسي", "location": "دمياط: مستشفى الشفاء", "price": "٣٤٠ جنيه", "rating": { "avg_rating": 20, "visitors_count": 36 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 29, "name": "دكتور علي كمال", "specialty": "استشاري أمراض الكلى", "location": "العباسية: ش 6 أكتوبر", "price": "٥٠٠ جنيه", "rating": { "avg_rating": 23, "visitors_count": 42 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 30, "name": "دكتوره سمية شهاب", "specialty": "استشاري الطب النفسي", "location": "15 مايو: ميدان السادات", "price": "٣٥٠ جنيه", "rating": { "avg_rating": 19, "visitors_count": 31 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 31, "name": "دكتور هاني فرج", "specialty": "استشاري أمراض الكلى", "location": "دمياط: ش الجندي", "price": "٤٨٠ جنيه", "rating": { "avg_rating": 20, "visitors_count": 41 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 32, "name": "دكتوره غادة توفيق", "specialty": "استشاري الطب النفسي", "location": "بني سويف: ش الجامعة", "price": "٣٢٠ جنيه", "rating": { "avg_rating": 19, "visitors_count": 35 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 33, "name": "دكتور أسامة زكي", "specialty": "استشاري أمراض الكلى", "location": "أسيوط: ميدان 6 أكتوبر", "price": "٤٥٠ جنيه", "rating": { "avg_rating": 22, "visitors_count": 38 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 34, "name": "دكتوره رانيا نعيم", "specialty": "استشاري الطب النفسي", "location": "العريش: ش فلسطين", "price": "٣٣٢ جنيه", "rating": { "avg_rating": 20, "visitors_count": 32 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 35, "name": "دكتور حمدي هلال", "specialty": "استشاري أمراض الكلى", "location": "الفيوم: ش النيل", "price": "٤٧٠ جنيه", "rating": { "avg_rating": 19, "visitors_count": 29 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 36, "name": "دكتوره نجلاء سامي", "specialty": "استشاري الطب النفسي", "location": "سوهاج: ش التحرير", "price": "٣٤٥ جنيه", "rating": { "avg_rating": 18, "visitors_count": 28 }, "availability": [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 37, "name": "دكتور يوسف قاسم", "specialty": "استشاري أمراض الكلى", "location": "العريش: ش 23 يوليو", "price": "٤٨٥ جنيه", "rating": { "avg_rating": 20, "visitors_count": 33 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 38, "name": "دكتوره سمية مصطفى", "specialty": "استشاري الطب النفسي", "location": "رفح: ش الجمل", "price": "٣١٠ جنيه", "rating": { "avg_rating": 21, "visitors_count": 37 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false },
        ]
    },
    { "id": 39, "name": "دكتور كريم طارق", "specialty": "استشاري أمراض الكلى", "location": "دمياط: ش الورد", "price": "٤٩٠ جنيه", "rating": { "avg_rating": 22, "visitors_count": 42 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true },
        ]
    },
    { "id": 40, "name": "دكتوره رشا علي", "specialty": "استشاري الطب النفسي", "location": "بني سويف: ش المريوطية", "price": "٣٤٠ جنيه", "rating": { "avg_rating": 20, "visitors_count": 31 }, "availability": [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": false },
        ]
    }
    ],

    "doctorsSimple": [
        { "id": 1, "name": "أحمد علي", "specialty": "دكتور كلى" },
        { "id": 2, "name": "سارة محمود", "specialty": "دكتور نفسي" },
        { "id": 3, "name": "محمد سعيد", "specialty": "دكتور كلى" },
        { "id": 4, "name": "منى حسن", "specialty": "دكتور نفسي" },
        { "id": 5, "name": "خالد عبد الله", "specialty": "دكتور كلى" },
        { "id": 6, "name": "نادية فاروق", "specialty": "دكتور نفسي" },
        { "id": 7, "name": "عمر يوسف", "specialty": "دكتور كلى" },
        { "id": 8, "name": "ياسمين أحمد", "specialty": "دكتور نفسي" },
        { "id": 9, "name": "محمود سامي", "specialty": "دكتور كلى" },
        { "id": 10, "name": "هدى إبراهيم", "specialty": "دكتور نفسي" },
        { "id": 11, "name": "سعيد وليد", "specialty": "دكتور كلى" },
        { "id": 12, "name": "إيمان أشرف", "specialty": "دكتور نفسي" },
        { "id": 13, "name": "حسن عبد العزيز", "specialty": "دكتور كلى" },
        { "id": 14, "name": "فاطمة لطفي", "specialty": "دكتور نفسي" },
        { "id": 15, "name": "محمود أسامة", "specialty": "دكتور كلى" },
        { "id": 16, "name": "هالة نبيل", "specialty": "دكتور نفسي" },
        { "id": 17, "name": "وليد أشرف", "specialty": "دكتور كلى" },
        { "id": 18, "name": "سارة شريف", "specialty": "دكتور نفسي" },
        { "id": 19, "name": "عادل فهمي", "specialty": "دكتور كلى" },
        { "id": 20, "name": "ليلى فتحي", "specialty": "دكتور نفسي" },
        { "id": 21, "name": "عماد سمير", "specialty": "دكتور كلى" },
        { "id": 22, "name": "شرين توفيق", "specialty": "دكتور نفسي" },
        { "id": 23, "name": "عبد الرحمن خالد", "specialty": "دكتور كلى" },
        { "id": 24, "name": "جهاد محسن", "specialty": "دكتور نفسي" },
        { "id": 25, "name": "حسام فؤاد", "specialty": "دكتور كلى" },
        { "id": 26, "name": "لمياء سليم", "specialty": "دكتور نفسي" },
        { "id": 27, "name": "حسام رجب", "specialty": "دكتور كلى" },
        { "id": 28, "name": "فاطمة عبد الله", "specialty": "دكتور نفسي" },
        { "id": 29, "name": "علي كمال", "specialty": "دكتور كلى" },
        { "id": 30, "name": "سمية شهاب", "specialty": "دكتور نفسي" },
        { "id": 31, "name": "هاني فرج", "specialty": "دكتور كلى" },
        { "id": 32, "name": "غادة توفيق", "specialty": "دكتور نفسي" },
        { "id": 33, "name": "أسامة زكي", "specialty": "دكتور كلى" },
        { "id": 34, "name": "رانيا نعيم", "specialty": "دكتور نفسي" },
        { "id": 35, "name": "حمدي هلال", "specialty": "دكتور كلى" },
        { "id": 36, "name": "نجلاء سامي", "specialty": "دكتور نفسي" },
        { "id": 37, "name": "يوسف قاسم", "specialty": "دكتور كلى" },
        { "id": 38, "name": "سمية مصطفى", "specialty": "دكتور نفسي" },
        { "id": 39, "name": "كريم طارق", "specialty": "دكتور كلى" },
        { "id": 40, "name": "رشا علي", "specialty": "دكتور نفسي" }
    ]
};