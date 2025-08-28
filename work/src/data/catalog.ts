export interface Link {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: string;
}

export interface ChildCategory {
  id: string;
  name: string;
  links: Link[];
}

export interface ParentCategory {
  id: string;
  name: string;
  children: ChildCategory[];
}

export const catalog: ParentCategory[] = [
  {
    id: 'sparta',
    name: 'اسبارطة',
    children: [
      {
        id: 'sparta-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'sparta-university',
            title: 'جامعات إسبارطة',
            description: 'مجموعة طلاب جامعتي إسبارطة التطبيقية وسليمان ديميرال للتواصل والمساعدة الأكاديمية',
            url: 'https://chat.whatsapp.com/BTlTQe9pRX46SJ0jVqX4pm?mode=ac_t',
            icon: '🏛️'
          }
        ]
      }
    ]
  },
  {
    id: 'istanbul',
    name: 'إسطنبول',
    children: [
      {
        id: 'istanbul-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'gelisim-university',
            title: 'جامعة غليشيم',
            description: 'مجموعة طلاب جامعة غليشيم في إسطنبول',
            url: 'https://chat.whatsapp.com/EM0FLSZshPZBU6D8hQiaJP?mode=ac_t',
            icon: '🎓'
          },
          {
            id: 'yildiz-university',
            title: 'جامعة يلدز',
            description: 'مجموعة طلاب جامعة يلدز التقنية في إسطنبول',
            url: 'https://t.me/+dp-Huio0inc2MmJk',
            icon: '⭐'
          },
          {
            id: 'biruni-university',
            title: 'جامعة بيروني',
            description: 'مجموعة طلاب جامعة بيروني في إسطنبول',
            url: 'https://chat.whatsapp.com/HR1KxVIdBeLCvWlJ2omOlF',
            icon: '🏫'
          },
          {
            id: 'kultur-university',
            title: 'جامعة كولتور',
            description: 'مجموعة طلاب جامعة كولتور في إسطنبول',
            url: 'https://chat.whatsapp.com/IUXpN4RZl3F0VBd7Z0YeJv?mode=ac_t',
            icon: '🎨'
          },
          {
            id: 'istanbul-university',
            title: 'جامعة اسطنبول',
            description: 'مجموعة طلاب جامعة إسطنبول الرئيسية',
            url: 'https://chat.whatsapp.com/G5Jsv1kxebM03UJP8tLjtd?mode=ac_t',
            icon: '🏛️'
          },
          {
            id: 'cerrahpasa-university',
            title: 'جامعة جراح باشا',
            description: 'مجموعة طلاب جامعة جراح باشا الطبية في إسطنبول',
            url: 'https://chat.whatsapp.com/G5Jsv1kxebM03UJP8tLjtd?mode=ac_t',
            icon: '⚕️'
          },
          {
            id: 'istinye-university',
            title: 'جامعة استينيا',
            description: 'مجموعة طلاب جامعة استينيا في إسطنبول',
            url: 'https://chat.whatsapp.com/GRRlIKoWLW68Fh6MBNpsat?mode=ems_copy_t',
            icon: '🏥'
          },
          {
            id: 'aydin-university',
            title: 'جامعة ايدن',
            description: 'مجموعة طلاب جامعة ايدن في إسطنبول',
            url: 'https://chat.whatsapp.com/JYaSS4s6wPf5R9s8uaFYZC?mode=ems_copy_t',
            icon: '🎯'
          }
        ]
      }
    ]
  },
  {
    id: 'denizli',
    name: 'دينيزلي',
    children: [
      {
        id: 'denizli-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'pamukkale-university',
            title: 'جامعة باموكالي',
            description: 'مجموعة طلاب جامعة باموكالي في دينيزلي',
            url: 'https://chat.whatsapp.com/J1986VJCyXXHVLHdGjZls7?mode=ac_t',
            icon: '🏔️'
          }
        ]
      }
    ]
  },
  {
    id: 'sakarya',
    name: 'سكاريا',
    children: [
      {
        id: 'sakarya-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'sakarya-university',
            title: 'جامعة سكاريا',
            description: 'مجموعة طلاب جامعة سكاريا للتواصل والدعم الأكاديمي',
            url: 'https://chat.whatsapp.com/FR8eNmXDGXvBukbSCO0lex?mode=ac_t',
            icon: '🌊'
          }
        ]
      }
    ]
  },
  {
    id: 'sivas',
    name: 'سيواس',
    children: [
      {
        id: 'sivas-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'cumhuriyet-university',
            title: 'جامعة جمهوريات',
            description: 'مجموعة طلاب جامعة جمهوريات في سيواس',
            url: 'https://chat.whatsapp.com/Cnol9RcCQHJHKpCibYuN3J?mode=ac_t',
            icon: '🏛️'
          }
        ]
      }
    ]
  },
  {
    id: 'konya',
    name: 'قونيا',
    children: [
      {
        id: 'konya-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'konya-technical-university',
            title: 'جامعة قونيا تكنيك',
            description: 'مجموعة طلاب جامعة قونيا التقنية',
            url: 'https://chat.whatsapp.com/CtZ6Fxec98iKyopPDoPRgn?mode=ems_copy_t',
            icon: '⚙️'
          },
          {
            id: 'necmettin-erbakan-university',
            title: 'جامعة نجم الدين اربكان',
            description: 'مجموعة طلاب جامعة نجم الدين اربكان في قونيا',
            url: 'https://chat.whatsapp.com/JTIcud34bab6OrT3MJoUE8',
            icon: '🌟'
          },
          {
            id: 'selcuk-university',
            title: 'جامعة سلجوق',
            description: 'مجموعة طلاب جامعة سلجوق في قونيا',
            url: 'https://chat.whatsapp.com/KLaD9mV6jY58mHpmtKNcxh',
            icon: '🏰'
          },
          {
            id: 'karatay-university',
            title: 'جامعة كاراتاي',
            description: 'مجموعة طلاب جامعة كاراتاي في قونيا',
            url: 'https://chat.whatsapp.com/DSDJjF0xUiSLJvy3GljHM6?mode=ems_copy_t',
            icon: '🏫'
          }
        ]
      }
    ]
  },
  {
    id: 'kayseri',
    name: 'قيصري',
    children: [
      {
        id: 'kayseri-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'erciyes-university',
            title: 'جامعة ارجيس',
            description: 'مجموعة طلاب جامعة ارجيس في قيصري',
            url: 'https://chat.whatsapp.com/DDbeyC806jI1FGwTl6ZRUM?mode=ac_t',
            icon: '🏔️'
          }
        ]
      }
    ]
  },
  {
    id: 'karabuk',
    name: 'كارابوك',
    children: [
      {
        id: 'karabuk-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'karabuk-university',
            title: 'جامعة كارابوك',
            description: 'مجموعة طلاب جامعة كارابوك للتواصل والمساعدة',
            url: 'https://chat.whatsapp.com/HuXwTTcUk3DKRbpNNrACoh',
            icon: '🌲'
          }
        ]
      }
    ]
  },
  {
    id: 'kutahya',
    name: 'كوتاهيا',
    children: [
      {
        id: 'kutahya-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'kutahya-university',
            title: 'جامعة كوتاهيا',
            description: 'مجموعة طلاب جامعة كوتاهيا للدعم الأكاديمي',
            url: 'https://chat.whatsapp.com/L34tKkPPW030TgiZPX8rZj?mode=ems_copy_t',
            icon: '🏺'
          }
        ]
      }
    ]
  },
  {
    id: 'malatya',
    name: 'ملاطيا',
    children: [
      {
        id: 'malatya-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'inonu-university',
            title: 'جامعة اينونو',
            description: 'مجموعة طلاب جامعة اينونو في ملاطيا',
            url: 'https://chat.whatsapp.com/IHasL7ZOD4R0zcxf8M1uJR?mode=ac_t',
            icon: '🍯'
          }
        ]
      }
    ]
  },
  {
    id: 'izmit',
    name: 'ايزميت',
    children: [
      {
        id: 'izmit-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'kocaeli-university',
            title: 'جامعة كوجالي',
            description: 'مجموعة طلاب جامعة كوجالي في ايزميت',
            url: 'https://chat.whatsapp.com/Dw5unwlgTHSDjoSVvbgfGV?mode=ac_t',
            icon: '🌿'
          }
        ]
      }
    ]
  },
  {
    id: 'ankara',
    name: 'انقرة',
    children: [
      {
        id: 'ankara-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'ankara-university',
            title: 'جامعة انقرة',
            description: 'مجموعة طلاب جامعة انقرة في العاصمة',
            url: 'https://chat.whatsapp.com/CIgZ1J73ih5AKgwRWjpmP8',
            icon: '🏛️'
          }
        ]
      }
    ]
  },
  {
    id: 'bursa',
    name: 'بورصة',
    children: [
      {
        id: 'bursa-universities',
        name: 'الجامعات',
        links: [
          {
            id: 'uludag-university',
            title: 'جامعة اولوداغ',
            description: 'مجموعة طلاب جامعة اولوداغ في بورصة',
            url: 'https://chat.whatsapp.com/KcUfPmVbRG3G9w5vKtspW6',
            icon: '🗻'
          }
        ]
      }
    ]
  }
];