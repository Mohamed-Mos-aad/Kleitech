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
        {
        "id": 1,
        "name": "دكتور أحمد علي",
        "specialty": "استشاري أمراض الكلى",
        "location": "القاهرة: مدينة نصر",
        "price": "٥٠٠ جنيه",
        "rating": { "avg_rating": 22, "visitors_count": 50 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 2,
        "name": "دكتوره سارة محمود",
        "specialty": "استشاري الطب النفسي",
        "location": "الإسكندرية: سموحة",
        "price": "٣٥٠ جنيه",
        "rating": { "avg_rating": 19, "visitors_count": 30 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 3,
        "name": "دكتور محمد سعيد",
        "specialty": "استشاري أمراض الكلى",
        "location": "الجيزة: الدقي",
        "price": "٤٠٠ جنيه",
        "rating": { "avg_rating": 20, "visitors_count": 40 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 4,
        "name": "دكتوره منى حسن",
        "specialty": "استشاري الطب النفسي",
        "location": "المنصورة: شارع الجمهورية",
        "price": "٣٢٠ جنيه",
        "rating": { "avg_rating": 18, "visitors_count": 28 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 5,
        "name": "دكتور خالد عبد الله",
        "specialty": "استشاري أمراض الكلى",
        "location": "طنطا: شارع الجيش",
        "price": "٤٥٠ جنيه",
        "rating": { "avg_rating": 21, "visitors_count": 35 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 6,
        "name": "دكتوره نادية فاروق",
        "specialty": "استشاري الطب النفسي",
        "location": "أسيوط: شارع الهلالي",
        "price": "٣٠٠ جنيه",
        "rating": { "avg_rating": 17, "visitors_count": 25 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 7,
        "name": "دكتور عمر يوسف",
        "specialty": "استشاري أمراض الكلى",
        "location": "الزقازيق: شارع فاروق",
        "price": "٤٧٠ جنيه",
        "rating": { "avg_rating": 23, "visitors_count": 38 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 8,
        "name": "دكتوره ياسمين أحمد",
        "specialty": "استشاري الطب النفسي",
        "location": "سوهاج: ميدان الثقافة",
        "price": "٣٣٠ جنيه",
        "rating": { "avg_rating": 19, "visitors_count": 30 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 9,
        "name": "دكتور محمود سامي",
        "specialty": "استشاري أمراض الكلى",
        "location": "دمياط: كورنيش النيل",
        "price": "٤٦٠ جنيه",
        "rating": { "avg_rating": 22, "visitors_count": 32 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 10,
        "name": "دكتوره هدى إبراهيم",
        "specialty": "استشاري الطب النفسي",
        "location": "الإسماعيلية: شارع الثلاثيني",
        "price": "٣٧٠ جنيه",
        "rating": { "avg_rating": 20, "visitors_count": 27 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 11,
        "name": "دكتور سعيد وليد",
        "specialty": "استشاري أمراض الكلى",
        "location": "شرم الشيخ: النور",
        "price": "٥٢٠ جنيه",
        "rating": { "avg_rating": 22, "visitors_count": 60 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 12,
        "name": "دكتوره إيمان أشرف",
        "specialty": "استشاري الطب النفسي",
        "location": "الغردقة: ميدان الدهار",
        "price": "٣٢٥ جنيه",
        "rating": { "avg_rating": 20, "visitors_count": 33 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 13,
        "name": "دكتور حسن عبد العزيز",
        "specialty": "استشاري أمراض الكلى",
        "location": "بني سويف: شارع النيل",
        "price": "٤٨٠ جنيه",
        "rating": { "avg_rating": 21, "visitors_count": 39 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 14,
        "name": "دكتوره فاطمة لطفي",
        "specialty": "استشاري الطب النفسي",
        "location": "قنا: ميدان السد العالي",
        "price": "٣٤٠ جنيه",
        "rating": { "avg_rating": 18, "visitors_count": 25 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 15,
        "name": "دكتور محمود أسامة",
        "specialty": "استشاري أمراض الكلى",
        "location": "الفيوم: ش الجلاء",
        "price": "٤٥٠ جنيه",
        "rating": { "avg_rating": 22, "visitors_count": 41 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 16,
        "name": "دكتوره هالة نبيل",
        "specialty": "استشاري الطب النفسي",
        "location": "السويس: شارع السلام",
        "price": "٣٢٠ جنيه",
        "rating": { "avg_rating": 19, "visitors_count": 35 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 17,
        "name": "دكتور وليد أشرف",
        "specialty": "استشاري أمراض الكلى",
        "location": "أسوان: كورنيش النيل",
        "price": "٤٨٠ جنيه",
        "rating": { "avg_rating": 20, "visitors_count": 30 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 18,
        "name": "دكتوره سارة شريف",
        "specialty": "استشاري الطب النفسي",
        "location": "الإسماعيلية: شارع الروضة",
        "price": "٣٥٠ جنيه",
        "rating": { "avg_rating": 21, "visitors_count": 38 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 19,
        "name": "دكتور عادل فهمي",
        "specialty": "استشاري أمراض الكلى",
        "location": "شبين الكوم: ميدان الجيش",
        "price": "٤٥٠ جنيه",
        "rating": { "avg_rating": 19, "visitors_count": 29 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 20,
        "name": "دكتوره ليلى فتحي",
        "specialty": "استشاري الطب النفسي",
        "location": "المحلة الكبرى: شارع بورسعيد",
        "price": "٣٣٠ جنيه",
        "rating": { "avg_rating": 18, "visitors_count": 26 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 21,
        "name": "دكتور عماد سمير",
        "specialty": "استشاري أمراض الكلى",
        "location": "قليوبية: ش شبرا",
        "price": "٤٦٠ جنيه",
        "rating": { "avg_rating": 22, "visitors_count": 40 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 22,
        "name": "دكتوره شرين توفيق",
        "specialty": "استشاري الطب النفسي",
        "location": "مرسى مطروح: ش 26 يوليو",
        "price": "٣٧٠ جنيه",
        "rating": { "avg_rating": 20, "visitors_count": 34 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 23,
        "name": "دكتور عبد الرحمن خالد",
        "specialty": "استشاري أمراض الكلى",
        "location": "البحيرة: ش التحرير",
        "price": "٤٧٠ جنيه",
        "rating": { "avg_rating": 21, "visitors_count": 35 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 24,
        "name": "دكتوره جهاد محسن",
        "specialty": "استشاري الطب النفسي",
        "location": "الأقصر: ميدان أبو الهول",
        "price": "٣٤٠ جنيه",
        "rating": { "avg_rating": 20, "visitors_count": 29 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 25,
        "name": "دكتور حسام فؤاد",
        "specialty": "استشاري أمراض الكلى",
        "location": "الخارج: شارع الماسورة",
        "price": "٤٨٠ جنيه",
        "rating": { "avg_rating": 22, "visitors_count": 32 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 26,
        "name": "دكتوره لمياء سليم",
        "specialty": "استشاري الطب النفسي",
        "location": "مسطرد: ش 23 يوليو",
        "price": "٣١٠ جنيه",
        "rating": { "avg_rating": 19, "visitors_count": 27 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 27,
        "name": "دكتور حسام رجب",
        "specialty": "استشاري أمراض الكلى",
        "location": "شبرا: ش السيدة زينب",
        "price": "٤٦٠ جنيه",
        "rating": { "avg_rating": 22, "visitors_count": 38 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 28,
        "name": "دكتوره فاطمة عبد الله",
        "specialty": "استشاري الطب النفسي",
        "location": "دمياط: مستشفى الشفاء",
        "price": "٣٤٠ جنيه",
        "rating": { "avg_rating": 20, "visitors_count": 36 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 29,
        "name": "دكتور علي كمال",
        "specialty": "استشاري أمراض الكلى",
        "location": "العباسية: ش 6 أكتوبر",
        "price": "٥٠٠ جنيه",
        "rating": { "avg_rating": 23, "visitors_count": 42 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 30,
        "name": "دكتوره سمية شهاب",
        "specialty": "استشاري الطب النفسي",
        "location": "15 مايو: ميدان السادات",
        "price": "٣٥٠ جنيه",
        "rating": { "avg_rating": 19, "visitors_count": 31 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 31,
        "name": "دكتور هاني فرج",
        "specialty": "استشاري أمراض الكلى",
        "location": "دمياط: ش الجندي",
        "price": "٤٨٠ جنيه",
        "rating": { "avg_rating": 20, "visitors_count": 41 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 32,
        "name": "دكتوره غادة توفيق",
        "specialty": "استشاري الطب النفسي",
        "location": "بني سويف: ش الجامعة",
        "price": "٣٢٠ جنيه",
        "rating": { "avg_rating": 19, "visitors_count": 35 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 33,
        "name": "دكتور أسامة زكي",
        "specialty": "استشاري أمراض الكلى",
        "location": "أسيوط: ميدان 6 أكتوبر",
        "price": "٤٥٠ جنيه",
        "rating": { "avg_rating": 22, "visitors_count": 38 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 34,
        "name": "دكتوره رانيا نعيم",
        "specialty": "استشاري الطب النفسي",
        "location": "العريش: ش فلسطين",
        "price": "٣٣٢ جنيه",
        "rating": { "avg_rating": 20, "visitors_count": 32 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 35,
        "name": "دكتور حمدي هلال",
        "specialty": "استشاري أمراض الكلى",
        "location": "الفيوم: ش النيل",
        "price": "٤٧٠ جنيه",
        "rating": { "avg_rating": 19, "visitors_count": 29 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ]
        ]
        },
        {
        "id": 36,
        "name": "دكتوره نجلاء سامي",
        "specialty": "استشاري الطب النفسي",
        "location": "سوهاج: ش التحرير",
        "price": "٣٤٥ جنيه",
        "rating": { "avg_rating": 18, "visitors_count": 28 },
        "availability": [
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 37,
        "name": "دكتور يوسف قاسم",
        "specialty": "استشاري أمراض الكلى",
        "location": "العريش: ش 23 يوليو",
        "price": "٤٨٥ جنيه",
        "rating": { "avg_rating": 20, "visitors_count": 33 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 38,
        "name": "دكتوره سمية مصطفى",
        "specialty": "استشاري الطب النفسي",
        "location": "رفح: ش الجمل",
        "price": "٣١٠ جنيه",
        "rating": { "avg_rating": 21, "visitors_count": 37 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 39,
        "name": "دكتور كريم طارق",
        "specialty": "استشاري أمراض الكلى",
        "location": "دمياط: ش الورد",
        "price": "٤٩٠ جنيه",
        "rating": { "avg_rating": 22, "visitors_count": 42 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": false },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": true }
            ]
        ]
        },
        {
        "id": 40,
        "name": "دكتوره رشا علي",
        "specialty": "استشاري الطب النفسي",
        "location": "بني سويف: ش المريوطية",
        "price": "٣٤٠ جنيه",
        "rating": { "avg_rating": 20, "visitors_count": 31 },
        "availability": [
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": true },
            { "time": "7:00 PM", "status": false },
            { "time": "8:00 PM", "status": false }
            ],
            [
            { "time": "3:00 PM", "status": true },
            { "time": "4:00 PM", "status": false },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ],
            [
            { "time": "3:00 PM", "status": false },
            { "time": "4:00 PM", "status": true },
            { "time": "5:00 PM", "status": true },
            { "time": "6:00 PM", "status": false },
            { "time": "7:00 PM", "status": true },
            { "time": "8:00 PM", "status": true }
            ]
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





export const chats = [
    {
        "chatId": "chat1",
        "participants": [
            {
                "userId": "doc1",
                "name": "د. أحمد مراد",
                "photo": "https://via.placeholder.com/150/FF5733/FFFFFF/?text=د.أحمد",
                "role": "doctor",
                "isOnline": true,
                "lastSeen": "2023-10-05T12:00:00Z"
            },
            {
                "userId": "pat1",
                "name": "ليلى حسن",
                "photo": "https://via.placeholder.com/150/33FF57/FFFFFF/?text=ليلى",
                "role": "patient",
                "isOnline": false,
                "lastSeen": "2023-10-05T11:30:00Z"
            }
        ],
        "messages": [
            {
                "messageId": "msg1",
                "senderId": "doc1",
                "receiverId": "pat1",
                "text": "مرحبًا ليلى، كيف حالك اليوم؟ هل لديك تحديثات حول صحتك؟",
                "timestamp": "2023-10-01T10:00:00Z",
                "status": "read",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg2",
                "senderId": "pat1",
                "receiverId": "doc1",
                "text": "مرحبًا دكتور، لا زلت أشعر بالألم في الجانب الأيسر.",
                "timestamp": "2023-10-01T10:05:00Z",
                "status": "delivered",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg3",
                "senderId": "doc1",
                "receiverId": "pat1",
                "text": "هل الألم حاد، أو أكثر خفيفًا مستمرًا؟",
                "timestamp": "2023-10-01T10:10:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg4",
                "senderId": "pat1",
                "receiverId": "doc1",
                "text": "إنه ألم خفيف، لكنه مستمر.",
                "timestamp": "2023-10-01T10:15:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg5",
                "senderId": "doc1",
                "receiverId": "pat1",
                "text": "سأحتاج إلى إجراء بعض الفحوصات. هل يمكنك القدوم غدًا؟",
                "timestamp": "2023-10-01T10:20:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg6",
                "senderId": "pat1",
                "receiverId": "doc1",
                "text": "نعم، سأكون هناك. شكرًا دكتور.",
                "timestamp": "2023-10-01T10:25:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg7",
                "senderId": "doc1",
                "receiverId": "pat1",
                "text": "تأكد من إحضار جميع الفحوصات السابقة.",
                "timestamp": "2023-10-01T10:30:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg8",
                "senderId": "doc1",
                "receiverId": "pat1",
                "audioUrl": "https://example.com/audio/voice-message-1.mp3",
                "timestamp": "2023-10-02T10:00:00Z",
                "status": "sent",
                "type": "voice",
                "reactions": []
            },
            {
                "messageId": "msg9",
                "senderId": "pat1",
                "receiverId": "doc1",
                "photoUrl": "https://via.placeholder.com/400/3498DB/FFFFFF/?text=فحص+الدم",
                "timestamp": "2023-10-02T10:05:00Z",
                "status": "sent",
                "type": "photo",
                "reactions": []
            },
            {
                "messageId": "msg10",
                "senderId": "doc1",
                "receiverId": "pat1",
                "text": "أحتاج النتائج لنتمكن من اتخاذ الخطوات التالية.",
                "timestamp": "2023-10-02T10:10:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg11",
                "senderId": "pat1",
                "receiverId": "doc1",
                "text": "أرسلت لك تحليل البول الأخير.",
                "timestamp": "2023-10-03T10:15:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg12",
                "senderId": "doc1",
                "receiverId": "pat1",
                "text": "شكرًا، سأقوم بمراجعته.",
                "timestamp": "2023-10-03T10:20:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            }
        ],
        "isArchived": false,
        "lastMessage": {
            "messageId": "msg12",
            "text": "شكرًا، سأقوم بمراجعته.",
            "timestamp": "2023-10-03T10:20:00Z"
        }
    },
    {
        "chatId": "chat2",
        "participants": [
            {
                "userId": "doc2",
                "name": "د. فاطمة سعيد",
                "photo": "https://via.placeholder.com/150/3357FF/FFFFFF/?text=د.فاطمة",
                "role": "doctor",
                "isOnline": false,
                "lastSeen": "2023-10-05T10:00:00Z"
            },
            {
                "userId": "pat2",
                "name": "كمال علي",
                "photo": "https://via.placeholder.com/150/FFD700/FFFFFF/?text=كمال",
                "role": "patient",
                "isOnline": true,
                "lastSeen": "2023-10-05T12:05:00Z"
            }
        ],
        "messages": [
            {
                "messageId": "msg1",
                "senderId": "doc2",
                "receiverId": "pat2",
                "text": "مرحبا كمال، كيف تسير الأمور منذ آخر زيارة؟",
                "timestamp": "2023-10-02T09:00:00Z",
                "status": "read",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg2",
                "senderId": "pat2",
                "receiverId": "doc2",
                "text": "لدي تحسن، لكن أشعر ببعض الإرهاق.",
                "timestamp": "2023-10-02T09:05:00Z",
                "status": "delivered",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg3",
                "senderId": "doc2",
                "receiverId": "pat2",
                "text": "هل قمت بتناول الأدوية بشكل منتظم؟",
                "timestamp": "2023-10-02T09:10:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg4",
                "senderId": "pat2",
                "receiverId": "doc2",
                "text": "نعم، ولكنني عانيت من بعض الأعراض الجانبية.",
                "timestamp": "2023-10-02T09:15:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg5",
                "senderId": "doc2",
                "receiverId": "pat2",
                "text": "ما هي الأعراض الجانبية التي شعرت بها؟",
                "timestamp": "2023-10-02T09:20:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg6",
                "senderId": "pat2",
                "receiverId": "doc2",
                "text": "شعرت بالغثيان والم المعدة.",
                "timestamp": "2023-10-02T09:25:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg7",
                "senderId": "doc2",
                "receiverId": "pat2",
                "text": "يمكن أن يكون ذلك طبيعيًا، لكن سنحتاج لتعديل الجرعة إن استمرت.",
                "timestamp": "2023-10-02T09:30:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg8",
                "senderId": "pat2",
                "receiverId": "doc2",
                "text": "حسنًا، سأتابع ذلك. شكرًا لك.",
                "timestamp": "2023-10-02T09:35:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg9",
                "senderId": "doc2",
                "receiverId": "pat2",
                "text": "تأكد من البقاء على تواصل إن شعرت بأي تغيرات.",
                "timestamp": "2023-10-02T09:40:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg10",
                "senderId": "doc2",
                "receiverId": "pat2",
                "text": "إذا ظهرت أعراض جديدة، يفضل زيارة العيادة.",
                "timestamp": "2023-10-02T09:45:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg11",
                "senderId": "doc2",
                "receiverId": "pat2",
                "audioUrl": "https://example.com/audio/voice-message-2.mp3",
                "timestamp": "2023-10-02T09:50:00Z",
                "status": "sent",
                "type": "voice",
                "reactions": []
            },
            {
                "messageId": "msg12",
                "senderId": "pat2",
                "receiverId": "doc2",
                "photoUrl": "https://via.placeholder.com/400/FFDD44/FFFFFF/?text=نتائج+التحليل",
                "timestamp": "2023-10-02T09:55:00Z",
                "status": "sent",
                "type": "photo",
                "reactions": []
            }
        ],
        "isArchived": false,
        "lastMessage": {
            "messageId": "msg12",
            "text": "نتائج+التحليل",
            "timestamp": "2023-10-02T09:55:00Z"
        }
    },
    {
        "chatId": "chat3",
        "participants": [
            {
                "userId": "doc3",
                "name": "د. أيمن جاد",
                "photo": "https://via.placeholder.com/150/FF33A1/FFFFFF/?text=أيمن",
                "role": "doctor",
                "isOnline": true,
                "lastSeen": "2023-10-05T12:10:00Z"
            },
            {
                "userId": "pat3",
                "name": "منى عبد الله",
                "photo": "https://via.placeholder.com/150/FF9900/FFFFFF/?text=منى",
                "role": "patient",
                "isOnline": false,
                "lastSeen": "2023-10-05T11:00:00Z"
            }
        ],
        "messages": [
            {
                "messageId": "msg1",
                "senderId": "doc3",
                "receiverId": "pat3",
                "text": "كيف تسير حالتك الصحية مؤخرًا؟",
                "timestamp": "2023-10-03T08:30:00Z",
                "status": "read",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg2",
                "senderId": "pat3",
                "receiverId": "doc3",
                "text": "أشعر بتحسن، لكن لا زالت بعض الآلام.",
                "timestamp": "2023-10-03T08:35:00Z",
                "status": "delivered",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg3",
                "senderId": "doc3",
                "receiverId": "pat3",
                "text": "هذا جيد. هل لديك أي اختبارات جديدة؟",
                "timestamp": "2023-10-03T08:40:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg4",
                "senderId": "pat3",
                "receiverId": "doc3",
                "text": "نعم، أجريت اختبارًا لوظائف الكلى.",
                "timestamp": "2023-10-03T08:45:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg5",
                "senderId": "doc3",
                "receiverId": "pat3",
                "text": "ممتاز! ما هي النتائج؟",
                "timestamp": "2023-10-03T08:50:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg6",
                "senderId": "pat3",
                "receiverId": "doc3",
                "text": "كل شيء على ما يرام، لكن نسبة الكرياتينين قد ارتفعت قليلاً.",
                "timestamp": "2023-10-03T08:55:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg7",
                "senderId": "doc3",
                "receiverId": "pat3",
                "text": "دعينا نقوم بتحليل نتائج الفحص في موعدنا المقبل.",
                "timestamp": "2023-10-03T09:00:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg8",
                "senderId": "pat3",
                "receiverId": "doc3",
                "text": "بالطبع، متى سيكون موعدنا التالي؟",
                "timestamp": "2023-10-03T09:05:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg9",
                "senderId": "doc3",
                "receiverId": "pat3",
                "text": "يوم الخميس في الساعة 4 عصرًا.",
                "timestamp": "2023-10-03T09:10:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg10",
                "senderId": "pat3",
                "receiverId": "doc3",
                "text": "شكرًا، سأكون هناك.",
                "timestamp": "2023-10-03T09:15:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg11",
                "senderId": "pat3",
                "receiverId": "doc3",
                "photoUrl": "https://via.placeholder.com/400/FF5555/FFFFFF/?text=فحص+الدم",
                "timestamp": "2023-10-03T09:20:00Z",
                "status": "sent",
                "type": "photo",
                "reactions": []
            },
            {
                "messageId": "msg12",
                "senderId": "doc3",
                "receiverId": "pat3",
                "audioUrl": "https://example.com/audio/voice-message-3.mp3",
                "timestamp": "2023-10-03T09:25:00Z",
                "status": "sent",
                "type": "voice",
                "reactions": []
            }
        ],
        "isArchived": false,
        "lastMessage": {
            "messageId": "msg12",
            "text": "فحص+الدم",
            "timestamp": "2023-10-03T09:25:00Z"
        }
    },
    {
        "chatId": "chat4",
        "participants": [
            {
                "userId": "doc4",
                "name": "د. ريم شريف",
                "photo": "https://via.placeholder.com/150/33FF88/FFFFFF/?text=ريم",
                "role": "doctor",
                "isOnline": true,
                "lastSeen": "2023-10-05T12:00:00Z"
            },
            {
                "userId": "pat4",
                "name": "سارة عادل",
                "photo": "https://via.placeholder.com/150/FF3355/FFFFFF/?text=سارة",
                "role": "patient",
                "isOnline": false,
                "lastSeen": "2023-10-05T11:30:00Z"
            }
        ],
        "messages": [
            {
                "messageId": "msg1",
                "senderId": "doc4",
                "receiverId": "pat4",
                "text": "مرحبًا سارة، كيف كانت حالتك بعد العلاج الأخير؟",
                "timestamp": "2023-10-04T10:00:00Z",
                "status": "read",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg2",
                "senderId": "pat4",
                "receiverId": "doc4",
                "text": "أشعر بتحسن، لكن ما زلت أعاني من الصداع.",
                "timestamp": "2023-10-04T10:05:00Z",
                "status": "delivered",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg3",
                "senderId": "doc4",
                "receiverId": "pat4",
                "text": "هل استعمالت المسكنات كما نصحتك؟",
                "timestamp": "2023-10-04T10:10:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg4",
                "senderId": "pat4",
                "receiverId": "doc4",
                "text": "نعم، لكن الألم يعود بعد فترة قصيرة.",
                "timestamp": "2023-10-04T10:15:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg5",
                "senderId": "doc4",
                "receiverId": "pat4",
                "text": "سنحتاج لتعديل علاجك. هل يمكنك تناول دواء إضافي؟",
                "timestamp": "2023-10-04T10:20:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg6",
                "senderId": "pat4",
                "receiverId": "doc4",
                "text": "بالطبع، سأقوم بذلك. متى يجب أن أعود للمتابعة؟",
                "timestamp": "2023-10-04T10:25:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg7",
                "senderId": "doc4",
                "receiverId": "pat4",
                "text": "عودة بعد أسبوع ستكون مناسبة.",
                "timestamp": "2023-10-04T10:30:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg8",
                "senderId": "pat4",
                "receiverId": "doc4",
                "text": "شكرًا لك على الدعم الدائم.",
                "timestamp": "2023-10-04T10:35:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg9",
                "senderId": "doc4",
                "receiverId": "pat4",
                "text": "لا تترددي في الاتصال إذا زادت الأعراض.",
                "timestamp": "2023-10-04T10:40:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg10",
                "senderId": "doc4",
                "receiverId": "pat4",
                "audioUrl": "https://example.com/audio/voice-message-4.mp3",
                "timestamp": "2023-10-04T10:45:00Z",
                "status": "sent",
                "type": "voice",
                "reactions": []
            },
            {
                "messageId": "msg11",
                "senderId": "pat4",
                "receiverId": "doc4",
                "photoUrl": "https://via.placeholder.com/400/33FF88/FFFFFF/?text=تحليل+الدم",
                "timestamp": "2023-10-04T10:50:00Z",
                "status": "sent",
                "type": "photo",
                "reactions": []
            },
            {
                "messageId": "msg12",
                "senderId": "doc4",
                "receiverId": "pat4",
                "text": "أمتاز، سأقوم بمراجعة النتائج.",
                "timestamp": "2023-10-04T10:55:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            }
        ],
        "isArchived": false,
        "lastMessage": {
            "messageId": "msg12",
            "text": "أمتاز، سأقوم بمراجعة النتائج.",
            "timestamp": "2023-10-04T10:55:00Z"
        }
    },
    {
        "chatId": "chat5",
        "participants": [
            {
                "userId": "doc5",
                "name": "د. عماد زيد",
                "photo": "https://via.placeholder.com/150/AAFF33/FFFFFF/?text=عماد",
                "role": "doctor",
                "isOnline": true,
                "lastSeen": "2023-10-05T12:45:00Z"
            },
            {
                "userId": "pat5",
                "name": "علياء محمد",
                "photo": "https://via.placeholder.com/150/FFD843/FFFFFF/?text=علياء",
                "role": "patient",
                "isOnline": false,
                "lastSeen": "2023-10-05T09:30:00Z"
            }
        ],
        "messages": [
            {
                "messageId": "msg1",
                "senderId": "doc5",
                "receiverId": "pat5",
                "text": "مرحبًا علياء، كيف تسير صحتك مع الأدوية؟",
                "timestamp": "2023-10-05T08:00:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg2",
                "senderId": "pat5",
                "receiverId": "doc5",
                "text": "أنا بخير، لكن شعرت بصداع خفيف مؤخرًا.",
                "timestamp": "2023-10-05T08:05:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg3",
                "senderId": "doc5",
                "receiverId": "pat5",
                "text": "هل تناولت المسكنات؟",
                "timestamp": "2023-10-05T08:10:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg4",
                "senderId": "pat5",
                "receiverId": "doc5",
                "text": "نعم، لكن الصداع عاد بعد فترة.",
                "timestamp": "2023-10-05T08:15:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg5",
                "senderId": "doc5",
                "receiverId": "pat5",
                "text": "إذا استمر، يمكنك مراجعة العيادة مرة أخرى.",
                "timestamp": "2023-10-05T08:20:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg6",
                "senderId": "pat5",
                "receiverId": "doc5",
                "text": "حسنًا، سأراقب حالتي. شكرًا لك.",
                "timestamp": "2023-10-05T08:25:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg7",
                "senderId": "doc5",
                "receiverId": "pat5",
                "text": "ممتاز. تأكدي من متابعة الأدوية بشكل جيد.",
                "timestamp": "2023-10-05T08:30:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg8",
                "senderId": "pat5",
                "receiverId": "doc5",
                "text": "سأفعل ذلك. شكرًا لتوجيهاتك.",
                "timestamp": "2023-10-05T08:35:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg9",
                "senderId": "doc5",
                "receiverId": "pat5",
                "text": "لا تترددي في طرح أي تساؤلات.",
                "timestamp": "2023-10-05T08:40:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg10",
                "senderId": "doc5",
                "receiverId": "pat5",
                "text": "أتمنى لك الشفاء العاجل.",
                "timestamp": "2023-10-05T08:45:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg11",
                "senderId": "doc5",
                "receiverId": "pat5",
                "audioUrl": "https://example.com/audio/voice-message-5.mp3",
                "timestamp": "2023-10-05T08:50:00Z",
                "status": "sent",
                "type": "voice",
                "reactions": []
            },
            {
                "messageId": "msg12",
                "senderId": "pat5",
                "receiverId": "doc5",
                "photoUrl": "https://via.placeholder.com/400/AAFF33/FFFFFF/?text=وصفات+الأدوية",
                "timestamp": "2023-10-05T08:55:00Z",
                "status": "sent",
                "type": "photo",
                "reactions": []
            }
        ],
        "isArchived": false,
        "lastMessage": {
            "messageId": "msg12",
            "text": "وصفات+الأدوية",
            "timestamp": "2023-10-05T08:55:00Z"
        }
    },
    {
        "chatId": "chat6",
        "participants": [
            {
                "userId": "doc6",
                "name": "د. سليم ناصر",
                "photo": "https://via.placeholder.com/150/FFC300/FFFFFF/?text=سليم",
                "role": "doctor",
                "isOnline": false,
                "lastSeen": "2023-10-05T10:00:00Z"
            },
            {
                "userId": "pat6",
                "name": "مصطفى عمر",
                "photo": "https://via.placeholder.com/150/FF33CC/FFFFFF/?text=مصطفى",
                "role": "patient",
                "isOnline": true,
                "lastSeen": "2023-10-05T12:15:00Z"
            }
        ],
        "messages": [
            {
                "messageId": "msg1",
                "senderId": "doc6",
                "receiverId": "pat6",
                "text": "كيف كانت نتائج التحليل؟",
                "timestamp": "2023-10-05T07:30:00Z",
                "status": "read",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg2",
                "senderId": "pat6",
                "receiverId": "doc6",
                "text": "أجريت التحليل، لكنني لم أتلق النتائج بعد.",
                "timestamp": "2023-10-05T07:35:00Z",
                "status": "delivered",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg3",
                "senderId": "doc6",
                "receiverId": "pat6",
                "text": "تأكد من مراجعة المعمل للحصول على النتائج.",
                "timestamp": "2023-10-05T07:40:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg4",
                "senderId": "pat6",
                "receiverId": "doc6",
                "text": "سأفعل ذلك. هل هناك أي شيء آخر يجب علي فعله؟",
                "timestamp": "2023-10-05T07:45:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg5",
                "senderId": "doc6",
                "receiverId": "pat6",
                "text": "استمر في تناول الأدوية بانتظام.",
                "timestamp": "2023-10-05T07:50:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg6",
                "senderId": "pat6",
                "receiverId": "doc6",
                "text": "نعم، سأتأكد من ذلك.",
                "timestamp": "2023-10-05T07:55:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg7",
                "senderId": "doc6",
                "receiverId": "pat6",
                "text": "إذا شعرت بأي أعراض غير طبيعية، اتصل بي على الفور.",
                "timestamp": "2023-10-05T08:00:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg8",
                "senderId": "pat6",
                "receiverId": "doc6",
                "text": "شكراً جزيلاً، سأتابع ذلك.",
                "timestamp": "2023-10-05T08:05:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg9",
                "senderId": "doc6",
                "receiverId": "pat6",
                "text": "تابع التعليمات وابق على تواصل.",
                "timestamp": "2023-10-05T08:10:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg10",
                "senderId": "doc6",
                "receiverId": "pat6",
                "text": "أتمنى لك الشفاء العاجل.",
                "timestamp": "2023-10-05T08:15:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg11",
                "senderId": "doc6",
                "receiverId": "pat6",
                "photoUrl": "https://via.placeholder.com/400/FFC300/FFFFFF/?text=نتائج+التحليل",
                "timestamp": "2023-10-05T08:20:00Z",
                "status": "sent",
                "type": "photo",
                "reactions": []
            },
            {
                "messageId": "msg12",
                "senderId": "doc6",
                "receiverId": "pat6",
                "audioUrl": "https://example.com/audio/voice-message-6.mp3",
                "timestamp": "2023-10-05T08:25:00Z",
                "status": "sent",
                "type": "voice",
                "reactions": []
            }
        ],
        "isArchived": false,
        "lastMessage": {
            "messageId": "msg12",
            "text": "نتائج+التحليل",
            "timestamp": "2023-10-05T08:25:00Z"
        }
    },
    {
        "chatId": "chat7",
        "participants": [
            {
                "userId": "doc7",
                "name": "د. هاجر صالح",
                "photo": "https://via.placeholder.com/150/9955FF/FFFFFF/?text=هاجر",
                "role": "doctor",
                "isOnline": true,
                "lastSeen": "2023-10-05T09:00:00Z"
            },
            {
                "userId": "pat7",
                "name": "فارس سامي",
                "photo": "https://via.placeholder.com/150/FF8888/FFFFFF/?text=فارس",
                "role": "patient",
                "isOnline": false,
                "lastSeen": "2023-10-05T10:30:00Z"
            }
        ],
        "messages": [
            {
                "messageId": "msg1",
                "senderId": "doc7",
                "receiverId": "pat7",
                "text": "كيف تسير حالتك الصحية؟ هل هناك أي تطورات؟",
                "timestamp": "2023-10-05T06:00:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg2",
                "senderId": "pat7",
                "receiverId": "doc7",
                "text": "لا زلت أشعر بالتعب العام، لكن الألم تراجع.",
                "timestamp": "2023-10-05T06:05:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg3",
                "senderId": "doc7",
                "receiverId": "pat7",
                "text": "هذا تحسن جيد. هل تقوم بممارسة الرياضة؟",
                "timestamp": "2023-10-05T06:10:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg4",
                "senderId": "pat7",
                "receiverId": "doc7",
                "text": "نعم، أمارس المشي كل يوم.",
                "timestamp": "2023-10-05T06:15:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg5",
                "senderId": "doc7",
                "receiverId": "pat7",
                "text": "ممتاز، هذا سيساعدك كثيرًا.",
                "timestamp": "2023-10-05T06:20:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg6",
                "senderId": "pat7",
                "receiverId": "doc7",
                "text": "هل هناك أي نصائح إضافية تود أن تعطيني إياها؟",
                "timestamp": "2023-10-05T06:25:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg7",
                "senderId": "doc7",
                "receiverId": "pat7",
                "text": "حاول تناول وجبات غذائية صحية وشرب الماء بكميات كافية.",
                "timestamp": "2023-10-05T06:30:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg8",
                "senderId": "pat7",
                "receiverId": "doc7",
                "text": "شكرًا، سأكثر من شرب الماء.",
                "timestamp": "2023-10-05T06:35:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg9",
                "senderId": "doc7",
                "receiverId": "pat7",
                "text": "نراعي دائمًا التوازن في الأنشطة والراحة.",
                "timestamp": "2023-10-05T06:40:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg10",
                "senderId": "doc7",
                "receiverId": "pat7",
                "audioUrl": "https://example.com/audio/voice-message-7.mp3",
                "timestamp": "2023-10-05T06:45:00Z",
                "status": "sent",
                "type": "voice",
                "reactions": []
            },
            {
                "messageId": "msg11",
                "senderId": "pat7",
                "receiverId": "doc7",
                "photoUrl": "https://via.placeholder.com/400/9955FF/FFFFFF/?text=نتائج+التحليل",
                "timestamp": "2023-10-05T06:50:00Z",
                "status": "sent",
                "type": "photo",
                "reactions": []
            },
            {
                "messageId": "msg12",
                "senderId": "doc7",
                "receiverId": "pat7",
                "text": "أتمنى لك الصحة دائمًا.",
                "timestamp": "2023-10-05T06:55:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            }
        ],
        "isArchived": false,
        "lastMessage": {
            "messageId": "msg12",
            "text": "أتمنى لك الصحة دائمًا.",
            "timestamp": "2023-10-05T06:55:00Z"
        }
    },
    {
        "chatId": "chat8",
        "participants": [
            {
                "userId": "doc8",
                "name": "د. نادر كمال",
                "photo": "https://via.placeholder.com/150/1567FF/FFFFFF/?text=نادرف",
                "role": "doctor",
                "isOnline": false,
                "lastSeen": "2023-10-05T10:00:00Z"
            },
            {
                "userId": "pat8",
                "name": "خالد سعيد",
                "photo": "https://via.placeholder.com/150/FF5555/FFFFFF/?text=خالد",
                "role": "patient",
                "isOnline": true,
                "lastSeen": "2023-10-05T12:05:00Z"
            }
        ],
        "messages": [
            {
                "messageId": "msg1",
                "senderId": "doc8",
                "receiverId": "pat8",
                "text": "ما هي البروتينات اليومية التي تتناولها؟",
                "timestamp": "2023-10-04T14:15:00Z",
                "status": "read",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg2",
                "senderId": "pat8",
                "receiverId": "doc8",
                "text": "أحاول تجنب البروتينات الحيوانية.",
                "timestamp": "2023-10-04T14:20:00Z",
                "status": "delivered",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg3",
                "senderId": "doc8",
                "receiverId": "pat8",
                "text": "هذا جيد، ولكن تأكد من أنك تحصل على ما يكفي من البروتين النباتي.",
                "timestamp": "2023-10-04T14:25:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg4",
                "senderId": "pat8",
                "receiverId": "doc8",
                "text": "سأحرص على ذلك.شكرًا لتذكيري.",
                "timestamp": "2023-10-04T14:30:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg5",
                "senderId": "doc8",
                "receiverId": "pat8",
                "text": "إذا شعرت بأي أعراض أو إذا كان هناك شيء غير عادي، لا تتردد في الاتصال بي.",
                "timestamp": "2023-10-04T14:35:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg6",
                "senderId": "pat8",
                "receiverId": "doc8",
                "text": "بالطبع، سأكون في تواصل دائم.",
                "timestamp": "2023-10-04T14:40:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg7",
                "senderId": "doc8",
                "receiverId": "pat8",
                "text": "كيف تسير الأمور بشكل عام في حياتك اليومية؟",
                "timestamp": "2023-10-04T14:45:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg8",
                "senderId": "pat8",
                "receiverId": "doc8",
                "text": "الأمور جيدة، لكنني بحاجة للمزيد من الوقت للراحة.",
                "timestamp": "2023-10-04T14:50:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg9",
                "senderId": "doc8",
                "receiverId": "pat8",
                "text": "راحة جيدة ستساعدك على التعافي السريع.",
                "timestamp": "2023-10-04T14:55:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg10",
                "senderId": "doc8",
                "receiverId": "pat8",
                "audioUrl": "https://example.com/audio/voice-message-8.mp3",
                "timestamp": "2023-10-04T15:00:00Z",
                "status": "sent",
                "type": "voice",
                "reactions": []
            },
            {
                "messageId": "msg11",
                "senderId": "pat8",
                "receiverId": "doc8",
                "photoUrl": "https://via.placeholder.com/400/1567FF/FFFFFF/?text=نتائج+التحليل",
                "timestamp": "2023-10-04T15:05:00Z",
                "status": "sent",
                "type": "photo",
                "reactions": []
            },
            {
                "messageId": "msg12",
                "senderId": "doc8",
                "receiverId": "pat8",
                "text": "أتمنى لك التوفيق في كل شيء.",
                "timestamp": "2023-10-04T15:10:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            }
        ],
        "isArchived": false,
        "lastMessage": {
            "messageId": "msg12",
            "text": "أتمنى لك التوفيق في كل شيء.",
            "timestamp": "2023-10-04T15:10:00Z"
        }
    },
    {
        "chatId": "chat9",
        "participants": [
            {
                "userId": "doc9",
                "name": "د. عادل طه",
                "photo": "https://via.placeholder.com/150/55FF8D/FFFFFF/?text=عادل",
                "role": "doctor",
                "isOnline": true,
                "lastSeen": "2023-10-05T12:45:00Z"
            },
            {
                "userId": "pat9",
                "name": "فتحية حسن",
                "photo": "https://via.placeholder.com/150/AA99FF/FFFFFF/?text=فتحية",
                "role": "patient",
                "isOnline": false,
                "lastSeen": "2023-10-05T11:50:00Z"
            }
        ],
        "messages": [
            {
                "messageId": "msg1",
                "senderId": "doc9",
                "receiverId": "pat9",
                "text": "مرحبًا فتحية، كيف تسير حالتك اليوم؟",
                "timestamp": "2023-10-03T16:00:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg2",
                "senderId": "pat9",
                "receiverId": "doc9",
                "text": "لا أشعر بتحسن كبير. الألم مستمر.",
                "timestamp": "2023-10-03T16:05:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg3",
                "senderId": "doc9",
                "receiverId": "pat9",
                "text": "هل نمط حياتك صحي؟",
                "timestamp": "2023-10-03T16:10:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg4",
                "senderId": "pat9",
                "receiverId": "doc9",
                "text": "لم ألتزم بالنظام الغذائي كما يجب.",
                "timestamp": "2023-10-03T16:15:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg5",
                "senderId": "doc9",
                "receiverId": "pat9",
                "text": "نحتاج إلى تحسين نمط حياتك لضمان الشفاء.",
                "timestamp": "2023-10-03T16:20:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg6",
                "senderId": "pat9",
                "receiverId": "doc9",
                "text": "ما هي الخطوات التي يجب أخذها؟",
                "timestamp": "2023-10-03T16:25:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg7",
                "senderId": "doc9",
                "receiverId": "pat9",
                "text": "تركيز أكبر على الفواكه والخضروات، وتجنب الأطعمة المصنعة.",
                "timestamp": "2023-10-03T16:30:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg8",
                "senderId": "pat9",
                "receiverId": "doc9",
                "text": "تشعرني ذلك بالقلق، لكنني سأحاول.",
                "timestamp": "2023-10-03T16:35:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg9",
                "senderId": "doc9",
                "receiverId": "pat9",
                "text": "إذا لم يتحسن الوضع، يجب علينا التفكير في الخيارات العلاجية الأخرى.",
                "timestamp": "2023-10-03T16:40:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg10",
                "senderId": "pat9",
                "receiverId": "doc9",
                "text": "أبذل قصارى جهدي.",
                "timestamp": "2023-10-03T16:45:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg11",
                "senderId": "doc9",
                "receiverId": "pat9",
                "audioUrl": "https://example.com/audio/voice-message-9.mp3",
                "timestamp": "2023-10-03T16:50:00Z",
                "status": "sent",
                "type": "voice",
                "reactions": []
            },
            {
                "messageId": "msg12",
                "senderId": "pat9",
                "receiverId": "doc9",
                "photoUrl": "https://via.placeholder.com/400/55FF8D/FFFFFF/?text=نتائج+التحليل",
                "timestamp": "2023-10-03T16:55:00Z",
                "status": "sent",
                "type": "photo",
                "reactions": []
            }
        ],
        "isArchived": false,
        "lastMessage": {
            "messageId": "msg12",
            "text": "نتائج+التحليل",
            "timestamp": "2023-10-03T16:55:00Z"
        }
    },
    {
        "chatId": "chat10",
        "participants": [
            {
                "userId": "doc10",
                "name": "د. جميلة عزيز",
                "photo": "https://via.placeholder.com/150/FF6699/FFFFFF/?text=جميلة",
                "role": "doctor",
                "isOnline": false,
                "lastSeen": "2023-10-05T10:00:00Z"
            },
            {
                "userId": "pat10",
                "name": "عبد الله المصري",
                "photo": "https://via.placeholder.com/150/FFA500/FFFFFF/?text=عبدالله",
                "role": "patient",
                "isOnline": true,
                "lastSeen": "2023-10-05T12:35:00Z"
            }
        ],
        "messages": [
            {
                "messageId": "msg1",
                "senderId": "doc10",
                "receiverId": "pat10",
                "text": "لا تنسى المتابعة الدورية.",
                "timestamp": "2023-10-02T11:00:00Z",
                "status": "delivered",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg2",
                "senderId": "pat10",
                "receiverId": "doc10",
                "text": "هل يمكنني تحديد موعد قريب؟",
                "timestamp": "2023-10-02T11:05:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg3",
                "senderId": "doc10",
                "receiverId": "pat10",
                "text": "نعم، هل يناسبك يوم الخميس القادم؟",
                "timestamp": "2023-10-02T11:10:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg4",
                "senderId": "pat10",
                "receiverId": "doc10",
                "text": "نعم، يوم الخميس يناسبني.",
                "timestamp": "2023-10-02T11:15:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg5",
                "senderId": "doc10",
                "receiverId": "pat10",
                "text": "سأراك يوم الخميس في الساعة 5 مساءً.",
                "timestamp": "2023-10-02T11:20:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg6",
                "senderId": "pat10",
                "receiverId": "doc10",
                "text": "شكرًا لك، سأكون هناك.",
                "timestamp": "2023-10-02T11:25:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg7",
                "senderId": "doc10",
                "receiverId": "pat10",
                "text": "هل لديك الفحوصات اللازمة للعرض بها؟",
                "timestamp": "2023-10-02T11:30:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg8",
                "senderId": "pat10",
                "receiverId": "doc10",
                "text": "نعم، أحتفظ بكل الوثائق.",
                "timestamp": "2023-10-02T11:35:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg9",
                "senderId": "doc10",
                "receiverId": "pat10",
                "text": "جيد، سأكون في انتظارك.",
                "timestamp": "2023-10-02T11:40:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg10",
                "senderId": "doc10",
                "receiverId": "pat10",
                "text": "أتمنى لك يومًا سعيدًا.",
                "timestamp": "2023-10-02T11:45:00Z",
                "status": "sent",
                "type": "text",
                "reactions": []
            },
            {
                "messageId": "msg11",
                "senderId": "pat10",
                "receiverId": "doc10",
                "photoUrl": "https://via.placeholder.com/400/FFA500/FFFFFF/?text=نتائج+الفحص",
                "timestamp": "2023-10-02T11:50:00Z",
                "status": "sent",
                "type": "photo",
                "reactions": []
            },
            {
                "messageId": "msg12",
                "senderId": "doc10",
                "receiverId": "pat10",
                "audioUrl": "https://example.com/audio/voice-message-10.mp3",
                "timestamp": "2023-10-02T11:55:00Z",
                "status": "sent",
                "type": "voice",
                "reactions": []
            }
        ],
        "isArchived": false,
        "lastMessage": {
            "messageId": "msg12",
            "text": "نتائج+الفحص",
            "timestamp": "2023-10-02T11:55:00Z"
        }
    }
];