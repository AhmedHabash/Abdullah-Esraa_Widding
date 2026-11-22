module.exports = [
"[project]/src/components/opening/monogram.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Monogram",
    ()=>Monogram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/wedding.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const EASE = [
    0.22,
    1,
    0.36,
    1
];
function Monogram({ className, animated = true, tone = "light" }) {
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const shouldAnimate = animated && !prefersReducedMotion;
    const { groom, bride } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$wedding$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weddingConfig"];
    const isDark = tone === "dark";
    const letterFill = isDark ? "fill-ivory" : "fill-burgundy";
    // Props for the ring: it "draws itself" from nothing to a full circle.
    const ringMotion = shouldAnimate ? {
        initial: {
            pathLength: 0,
            opacity: 0
        },
        animate: {
            pathLength: 1,
            opacity: 1
        },
        transition: {
            duration: 1.8,
            ease: EASE
        }
    } : {};
    // Props for everything else: fades in and rises slightly after a delay.
    const fadeIn = (delay)=>shouldAnimate ? {
            initial: {
                opacity: 0,
                y: 6
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.9,
                delay,
                ease: EASE
            }
        } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 200 200",
        fill: "none",
        role: "img",
        "aria-label": `${groom.nameAr} و${bride.nameAr}`,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-auto h-auto w-40 text-gold", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "rotate(-90 100 100)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: "100",
                        cy: "100",
                        r: "94",
                        stroke: "currentColor",
                        strokeWidth: "1.2",
                        strokeLinecap: "round",
                        ...ringMotion
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/monogram.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: "100",
                        cy: "100",
                        r: "88",
                        stroke: "currentColor",
                        strokeWidth: "0.6",
                        opacity: "0.6",
                        ...ringMotion
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/monogram.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/opening/monogram.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                d: "M100 32L105 39L100 46L95 39Z",
                stroke: "currentColor",
                strokeWidth: "1",
                strokeLinejoin: "round",
                ...fadeIn(1.2)
            }, void 0, false, {
                fileName: "[project]/src/components/opening/monogram.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
                ...fadeIn(0.6),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "142",
                        y: "120",
                        textAnchor: "middle",
                        fontSize: "76",
                        className: letterFill,
                        style: {
                            fontFamily: "var(--font-display), serif"
                        },
                        children: groom.initialAr
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/monogram.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "68",
                        y: "120",
                        textAnchor: "middle",
                        fontSize: "76",
                        className: letterFill,
                        style: {
                            fontFamily: "var(--font-display), serif"
                        },
                        children: bride.initialAr
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/monogram.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/opening/monogram.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].text, {
                x: "112",
                y: "122",
                textAnchor: "middle",
                fontSize: "30",
                className: "fill-gold",
                style: {
                    fontFamily: "var(--font-latin), serif"
                },
                ...fadeIn(1),
                children: "&"
            }, void 0, false, {
                fileName: "[project]/src/components/opening/monogram.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
                stroke: "currentColor",
                strokeWidth: "1",
                strokeLinecap: "round",
                ...fadeIn(1.3),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M72 154H93M107 154H128"
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/monogram.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "100",
                        cy: "154",
                        r: "1.6",
                        fill: "currentColor",
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/monogram.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/opening/monogram.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/opening/monogram.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/config/wedding.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "weddingConfig",
    ()=>weddingConfig
]);
const weddingConfig = {
    groom: {
        nameAr: "عَبْدُ اللهِ",
        nameEn: "Abdullah",
        initialAr: "ع",
        initialEn: "A"
    },
    bride: {
        nameAr: "إِسْرَاء",
        nameEn: "Esraa",
        initialAr: "إِ",
        initialEn: "E"
    },
    date: {
        // Egypt is UTC+2 in December. The time (19:00) is a placeholder:
        // replace it with the real start time of the wedding.
        dateTimeISO: "2026-12-31T19:00:00+02:00",
        weekdayAr: "الخميس",
        dayLabel: "31",
        monthAr: "ديسمبر",
        year: "٢٠٢٦",
        numeric: "31 / 12 / 2026"
    },
    venue: {
        nameAr: "قاعة جراند بلازا",
        mapsUrl: "https://maps.app.goo.gl/rhiJVxkUG6fosH5b6"
    },
    invitation: {
        heroPhrase: "حكايةٌ كتبها القدر بحبر المودة، وتكتمل بدعواتكم",
        invitationTitle: "بقلوبٍ يملؤها الفرح",
        paragraphs: [
            "في العمر لحظاتٌ لا تكتمل إلا بوجود من نحب، ويوم زفافنا واحدٌ من أجمل تلك اللحظات.",
            "بعد رحلةٍ من الود والتفاهم، قررنا أن نبدأ معاً فصلاً جديداً من الحكاية: بيتاً عمادُه المحبة، وسقفُه السكينة.",
            "ويسعدنا أن تكونوا شهوداً على فرحتنا، وأن تشاركونا ليلةً نحفظها في القلب عمراً، فحضوركم أجمل ما يزيّن هذا اليوم."
        ],
        closingMessage: "شكراً لأنكم جزءٌ من حكايتنا. دعواتكم ومحبتكم أجمل هدية، ونتمنى أن نراكم بيننا في ليلة العمر."
    },
    // All times below are placeholders. Replace them with the real schedule.
    timeline: [
        {
            id: "arrival",
            time: "٧:٠٠ م",
            title: "استقبال الضيوف",
            description: "نرحّب بكم ونبدأ الليلة بابتسامة وأجواء دافئة.",
            icon: "arrival"
        },
        {
            id: "ceremony",
            time: "٨:٠٠ م",
            title: "دخول العروسين",
            description: "لحظة الدخول التي ننتظرها بكل شغف.",
            icon: "ceremony"
        },
        {
            id: "photos",
            time: "٨:٣٠ م",
            title: "صور تذكارية",
            description: "نلتقط معكم صوراً تبقى ذكرى جميلة لسنين.",
            icon: "photos"
        },
        {
            id: "dance",
            time: "٩:٠٠ م",
            title: "الفرحة والرقص",
            description: "ونختم الليلة بالبهجة والموسيقى.",
            icon: "dance"
        }
    ],
    share: {
        message: "يسعدنا دعوتكم لحضور حفل زفاف عَبْدُ اللهِ ومنار 💍\nالخميس ٣١ ديسمبر ٢٠٢٦ - قاعة جراند بلازا"
    },
    music: {
        enabled: true,
        src: "/audio/wedding-music.mp3"
    },
    credit: {
        label: "صُمّمت هذه الدعوة بحبّ بواسطة",
        name: "م. أحمد عصام",
        relation: " مهندس برمجيات ومصمم واجهات المستخدم",
        links: [
            {
                id: "facebook",
                label: "فيسبوك",
                url: "https://www.facebook.com/share/1H49jNy5bS/"
            },
            {
                id: "whatsapp",
                label: "واتساب",
                url: "https://wa.me/201557209799"
            },
            {
                id: "github",
                label: "جيت هاب",
                url: "https://github.com/AhmedHabash"
            }
        ]
    }
};
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
];

//# sourceMappingURL=src_0joioux6k0clm._.js.map