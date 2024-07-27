// assets
import bannerImageOne from '../assets/images/banner-img-1.webp'
import bannerImageTwo from '../assets/images/banner-img-2.webp'
import bannerImageThree from '../assets/images/banner-img-3.webp'
import blogImageOne from "../assets/images/blog-img-1.jpg"
import blogImageTwo from "../assets/images/blog-img-1.jpg"
import blogImageThree from "../assets/images/blog-img-1.jpg"
import blogImageFour from "../assets/images/blog-img-1.jpg"
import standoutImageOne from "../assets/images/whats-makes-img-1.jpg"
import standoutImageTwo from "../assets/images/whats-makes-img-2.jpg"
import standoutImageThree from "../assets/images/whats-makes-img-3.jpg"
import appMockupImage from '../assets/images/App-Mockup.jpg'
import mobileAppThumbnail from '../assets/images/mobile-app-img.png'
import webAppThumbnail from '../assets/images/webdesign-img.png'
import softThumbnail from '../assets/images/soft-img.png'
import consultingThumbnail from '../assets/images/consulting-img.png'
// icons
import { MdOutlineDeveloperMode, MdOutlineDesignServices } from "react-icons/md";
import { FaCode, FaHandHoldingMedical, FaFacebook, FaLinkedin } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";

export const PAGES_LINKS = [
    {
        name: 'الصفحة الرئسية',
        path: '/',
    },
    {
        name: 'معلومات عنا',
        path: '/about-us',
    },
    {
        name: 'اعمالنا',
        path: '/our-works',
    },
    {
        name: 'الخدمات',
        path: '/services',
    },
    {
        name: 'اتصل بنا',
        path: '/contact-us',
    }
]

export const SOCIAL_MEDIA_LINKS = [
    {
        id: 1,
        name: 'Facebook',
        path: 'https://www.facebook.com/',
        avatar: FaFacebook
    },
    {
        id: 2,
        name: 'Linkedin',
        path: 'https://www.linkedin.com/',
        avatar: FaLinkedin
    },
    {
        id: 3,
        name: 'Twitter',
        path: 'https://www.twitter.com/',
        avatar: FaSquareXTwitter
    }
]

export const HOME_BANNER = [
    {
        id: 1,
        description: 'نُصمم التجارب الرقمية التي تُعيد تشكيل رحلتك المهنية',
        image: bannerImageOne,
    },
    {
        id: 2,
        description: 'ابق في صدارة المنافسة بفضل التكنولوجيا المتطورة',
        image: bannerImageTwo,
    },
    {
        id: 3,
        description: 'حلول مُخصصة مصممة خصيصًا لتلبية احتياجات عملك',
        image: bannerImageThree,
    }
]

export const SERVICES = [
    {
        id: 1,
        name: 'تطوير تطبيقات الهاتف المحمول',
        description: "تطبيقات هاتفية مُصممة خصيصًا لنظامي التشغيل أندرويد وiOS، خصيصًا لتلبية كافة احتياجاتك",
        descriptionTwo: 'حول فكرتك إلى تطبيقٍ هاتفي جاهز للطرح في السوق. نحن متخصصون في كلٍ من منصات iOS وأندرويد، ويستخدم خبراؤنا أحدث التقنيات لإنشاء تطبيقاتٍ سهلة الاستخدام وقابلة للتطوير وتتوافق مع أهداف عملك.',
        icon: MdOutlineDeveloperMode,
        thumbnail: mobileAppThumbnail,
    },
    {
        id: 2,
        name: "تطوير مواقع الإنترنت",
        description: "تطبيقات ويب ديناميكية وسريعة الاستجابة تأسر جمهورك وتخدم احتياجات العمل",
        descriptionTwo: 'صمم حضورك الإلكتروني من خلال خدمات تصميم وتطوير مواقع الويب المتخصصة. نحن نستخدم أحدث التقنيات للتأكد من أن موقعك جذابٌ ولافتٌ للأنظار ومتوافق مع أهداف عملك.',
        icon: FaCode,
        thumbnail: webAppThumbnail,
    },
    {
        id: 3,
        name: "تطوير البرمجيات",
        description: "تطوير البرامج التي تعمل على تحسين الأعمال وتضمن تجربة سلسة للمستخدم",
        descriptionTwo: 'قوي وجهة نظرك وحولها إلى حلٍ برمجي جاهز للإطلاق. صمم تطبيقات برمجية قوية تعمل على تبسيط العمليات وتعزيز الكفاءة وتعزز نجاحك الرقمي.',
        icon: CiServer,
        thumbnail: softThumbnail,
    },
    {
        id: 4,
        name: "الاستشارات",
        description: "التوجيه الاستراتيجي المطلوب لملائمة التكنولوجيا مع أهداف عملك وتحقيق أقصى كفاءة ممكنة",
        descriptionTwo: 'إرتقِ بأعمالك من خلال استشاراتنا التكنولوجية. نحن نقدم التوجيهات الفنية والاستراتيجية لتحسين الأداء وزيادة نمو الأعمال.',
        icon: FaHandHoldingMedical,
        thumbnail: consultingThumbnail,
    },
    {
        id: 5,
        name: "تصميم واجهة المستخدم أو تجربة المستخدم",
        description: "تصميمات بسيطة ومذهلة بصريًا تضمن تجربة سلسة وجذابة للمستخدم",
        icon: MdOutlineDesignServices,
    }
]


export const BLOGS = [
    {
        id: 1,
        title: "Creating Smart Apps: A Journey into Machine Learning and Artificial Intelligence",
        image: blogImageOne,
    },
    {
        id: 2,
        title: "Common mistakes to avoid while developing React native apps",
        image: blogImageTwo,
    },
    {
        id: 3,
        title: "How is AR and VR technology supporting businesses in 2023",
        image: blogImageThree,
    },
    {
        id: 4,
        title: "Power of AI and ML for Transforming Mobile App Development ",
        image: blogImageFour,
    },
]

export const TESTIMONIAL = [
    {
        id: 1,
        name: "محمد",
        description: `طوال المشروع، كان أعضاء الفريق في "break row" متعاونين ومتواصلين للغاية. لقد كانوا دائمًا على استعداد للاستماع إلى أفكاري وتعليقاتي، وكانوا دائمًا منفتحين على الاقتراحات الجديدة. لقد تأثرت كثيرًا بقدرتهم على العمل معًا كفريق واحد، وأنا راضٍ جدًا عن الشركة.`,
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        company: "BreakRow",
    },
    {
        id: 2,
        name: "سلمان ناصر",
        description: `لقد عملت مع أكثر من ٢٠ شركة، وأثبتت "break row" أنها واحدة من أفضل الشركات. قدم الفريق حلًا ينفذ جميع متطلباتي بدقة. أقدر كل المساعدة التي قدمها لي الفريق. أود بالتأكيد أن أوصي بـ "كود هايف" لتحويل مسار عملك.`,
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        company: "BreakRow",
    },
    {
        id: 3,
        name: "سلمان ناصر",
        description: `لقد عملت مع أكثر من ٢٠ شركة، وأثبتت "break row" أنها واحدة من أفضل الشركات. قدم الفريق حلًا ينفذ جميع متطلباتي بدقة. أقدر كل المساعدة التي قدمها لي الفريق. أود بالتأكيد أن أوصي بـ "كود هايف" لتحويل مسار عملك.`,
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        company: "BreakRow",
    },
    {
        id: 4,
        name: "سلمان ناصر",
        description: `لقد عملت مع أكثر من ٢٠ شركة، وأثبتت "break row" أنها واحدة من أفضل الشركات. قدم الفريق حلًا ينفذ جميع متطلباتي بدقة. أقدر كل المساعدة التي قدمها لي الفريق. أود بالتأكيد أن أوصي بـ "كود هايف" لتحويل مسار عملك.`,
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
        company: "BreakRow",
    },
    {
        id: 5,
        name: "راشد حسين",
        description: `لقد عملت مع أكثر من ٢٠ شركة، وأثبتت "break row" أنها واحدة من أفضل الشركات. قدم الفريق حلًا ينفذ جميع متطلباتي بدقة. أقدر كل المساعدة التي قدمها لي الفريق. أود بالتأكيد أن أوصي بـ "كود هايف" لتحويل مسار عملك.`,
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        company: "BreakRow",
    }
]

export const STANDOUT = [
    {
        title: 'استراتيجيات مثالية',
        description: 'جمع التحليلات الثاقبة للسوق ومزجها لتحقيق النمو والتميز.',
        image: standoutImageOne,
    },
    {
        title: "افكار ابداعية",
        description: 'نحن دائمًا ما نتخطى حدود الابتكار لتحسين منتجاتنا وخدماتنا.',
        image: standoutImageTwo,
    },
    {
        title: "حلول ابداعية",
        description: "ومن خلال تسخير قوة الإبداع، فإننا نتفوق في تقديم الحلول التي يتردد صداها بعمق لدى المستهلكين.",
        image: standoutImageThree,
    }
]

export const OURWORKS = [
    {
        id: 1,
        name: 'porject 1',
        thumbnails: appMockupImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'webApp'
    },
    {
        id: 2,
        name: 'porject 2',
        thumbnails: appMockupImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'webApp'
    }, {
        id: 3,
        name: 'porject 3',
        thumbnails: appMockupImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'webApp'
    }, {
        id: 4,
        name: 'porject 4',
        thumbnails: appMockupImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'webApp'
    }, {
        id: 5,
        name: 'porject 5',
        thumbnails: appMockupImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'webApp'
    },
    {
        id: 6,
        name: 'porject 2',
        thumbnails: appMockupImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'webApp'
    }, {
        id: 7,
        name: 'porject 3',
        thumbnails: appMockupImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'webApp'
    }, {
        id: 8,
        name: 'porject 4',
        thumbnails: appMockupImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'webApp'
    }, {
        id: 9,
        name: 'porject 5',
        thumbnails: appMockupImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'webApp'
    }
] 