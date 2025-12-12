-- Seed data for Guofsyrians Slider
-- Populates cities, universities, and links tables

-- Insert Cities
INSERT INTO cities (id, name) VALUES
('sparta', 'اسبارطة'),
('istanbul', 'إسطنبول'),
('denizli', 'دينيزلي'),
('sakarya', 'سكاريا'),
('sivas', 'سيواس'),
('konya', 'قونيا'),
('kayseri', 'قيصري'),
('karabuk', 'كارابوك'),
('kutahya', 'كوتاهيا'),
('malatya', 'ملاطيا'),
('izmit', 'ايزميت'),
('ankara', 'انقرة'),
('bursa', 'بورصة');

-- Insert Universities
INSERT INTO universities (id, city_id, name) VALUES
('sparta-universities', 'sparta', 'الجامعات'),
('istanbul-universities', 'istanbul', 'الجامعات'),
('denizli-universities', 'denizli', 'الجامعات'),
('sakarya-universities', 'sakarya', 'الجامعات'),
('sivas-universities', 'sivas', 'الجامعات'),
('konya-universities', 'konya', 'الجامعات'),
('kayseri-universities', 'kayseri', 'الجامعات'),
('karabuk-universities', 'karabuk', 'الجامعات'),
('kutahya-universities', 'kutahya', 'الجامعات'),
('malatya-universities', 'malatya', 'الجامعات'),
('izmit-universities', 'izmit', 'الجامعات'),
('ankara-universities', 'ankara', 'الجامعات'),
('bursa-universities', 'bursa', 'الجامعات');

-- Insert Links for Sparta
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('sparta-university', 'sparta-universities', 'جامعات إسبارطة', 'مجموعة طلاب جامعتي إسبارطة التطبيقية وسليمان ديميرال للتواصل والمساعدة الأكاديمية', 'https://chat.whatsapp.com/BTlTQe9pRX46SJ0jVqX4pm?mode=ac_t', '🏛️');

-- Insert Links for Istanbul
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('gelisim-university', 'istanbul-universities', 'جامعة غليشيم', 'مجموعة طلاب جامعة غليشيم في إسطنبول', 'https://chat.whatsapp.com/EM0FLSZshPZBU6D8hQiaJP?mode=ac_t', '🎓'),
('yildiz-university', 'istanbul-universities', 'جامعة يلدز', 'مجموعة طلاب جامعة يلدز التقنية في إسطنبول', 'https://t.me/+dp-Huio0inc2MmJk', '⭐'),
('biruni-university', 'istanbul-universities', 'جامعة بيروني', 'مجموعة طلاب جامعة بيروني في إسطنبول', 'https://chat.whatsapp.com/HR1KxVIdBeLCvWlJ2omOlF', '🏫'),
('kultur-university', 'istanbul-universities', 'جامعة كولتور', 'مجموعة طلاب جامعة كولتور في إسطنبول', 'https://chat.whatsapp.com/IUXpN4RZl3F0VBd7Z0YeJv?mode=ac_t', '🎨'),
('istanbul-university', 'istanbul-universities', 'جامعة اسطنبول', 'مجموعة طلاب جامعة إسطنبول الرئيسية', 'https://chat.whatsapp.com/G5Jsv1kxebM03UJP8tLjtd?mode=ac_t', '🏛️'),
('cerrahpasa-university', 'istanbul-universities', 'جامعة جراح باشا', 'مجموعة طلاب جامعة جراح باشا الطبية في إسطنبول', 'https://chat.whatsapp.com/G5Jsv1kxebM03UJP8tLjtd?mode=ac_t', '⚕️'),
('istinye-university', 'istanbul-universities', 'جامعة استينيا', 'مجموعة طلاب جامعة استينيا في إسطنبول', 'https://chat.whatsapp.com/GRRlIKoWLW68Fh6MBNpsat?mode=ems_copy_t', '🏥'),
('aydin-university', 'istanbul-universities', 'جامعة ايدن', 'مجموعة طلاب جامعة ايدن في إسطنبول', 'https://chat.whatsapp.com/JYaSS4s6wPf5R9s8uaFYZC?mode=ems_copy_t', '🎯');

-- Insert Links for Denizli
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('pamukkale-university', 'denizli-universities', 'جامعة باموكالي', 'مجموعة طلاب جامعة باموكالي في دينيزلي', 'https://chat.whatsapp.com/J1986VJCyXXHVLHdGjZls7?mode=ac_t', '🏔️');

-- Insert Links for Sakarya
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('sakarya-university', 'sakarya-universities', 'جامعة سكاريا', 'مجموعة طلاب جامعة سكاريا للتواصل والدعم الأكاديمي', 'https://chat.whatsapp.com/FR8eNmXDGXvBukbSCO0lex?mode=ac_t', '🌊');

-- Insert Links for Sivas
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('cumhuriyet-university', 'sivas-universities', 'جامعة جمهوريات', 'مجموعة طلاب جامعة جمهوريات في سيواس', 'https://chat.whatsapp.com/Cnol9RcCQHJHKpCibYuN3J?mode=ac_t', '🏛️');

-- Insert Links for Konya
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('konya-technical-university', 'konya-universities', 'جامعة قونيا تكنيك', 'مجموعة طلاب جامعة قونيا التقنية', 'https://chat.whatsapp.com/CtZ6Fxec98iKyopPDoPRgn?mode=ems_copy_t', '⚙️'),
('necmettin-erbakan-university', 'konya-universities', 'جامعة نجم الدين اربكان', 'مجموعة طلاب جامعة نجم الدين اربكان في قونيا', 'https://chat.whatsapp.com/JTIcud34bab6OrT3MJoUE8', '🌟'),
('selcuk-university', 'konya-universities', 'جامعة سلجوق', 'مجموعة طلاب جامعة سلجوق في قونيا', 'https://chat.whatsapp.com/KLaD9mV6jY58mHpmtKNcxh', '🏰'),
('karatay-university', 'konya-universities', 'جامعة كاراتاي', 'مجموعة طلاب جامعة كاراتاي في قونيا', 'https://chat.whatsapp.com/DSDJjF0xUiSLJvy3GljHM6?mode=ems_copy_t', '🏫');

-- Insert Links for Kayseri
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('erciyes-university', 'kayseri-universities', 'جامعة ارجيس', 'مجموعة طلاب جامعة ارجيس في قيصري', 'https://chat.whatsapp.com/DDbeyC806jI1FGwTl6ZRUM?mode=ac_t', '🏔️');

-- Insert Links for Karabuk
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('karabuk-university', 'karabuk-universities', 'جامعة كارابوك', 'مجموعة طلاب جامعة كارابوك للتواصل والمساعدة', 'https://chat.whatsapp.com/HuXwTTcUk3DKRbpNNrACoh', '🌲');

-- Insert Links for Kutahya
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('kutahya-university', 'kutahya-universities', 'جامعة كوتاهيا', 'مجموعة طلاب جامعة كوتاهيا للدعم الأكاديمي', 'https://chat.whatsapp.com/L34tKkPPW030TgiZPX8rZj?mode=ems_copy_t', '🏺');

-- Insert Links for Malatya
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('inonu-university', 'malatya-universities', 'جامعة اينونو', 'مجموعة طلاب جامعة اينونو في ملاطيا', 'https://chat.whatsapp.com/IHasL7ZOD4R0zcxf8M1uJR?mode=ac_t', '🍯');

-- Insert Links for Izmit
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('kocaeli-university', 'izmit-universities', 'جامعة كوجالي', 'مجموعة طلاب جامعة كوجالي في ايزميت', 'https://chat.whatsapp.com/Dw5unwlgTHSDjoSVvbgfGV?mode=ac_t', '🌿');

-- Insert Links for Ankara
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('ankara-university', 'ankara-universities', 'جامعة انقرة', 'مجموعة طلاب جامعة انقرة في العاصمة', 'https://chat.whatsapp.com/CIgZ1J73ih5AKgwRWjpmP8', '🏛️');

-- Insert Links for Bursa
INSERT INTO links (id, university_id, title, description, url, icon) VALUES
('uludag-university', 'bursa-universities', 'جامعة اولوداغ', 'مجموعة طلاب جامعة اولوداغ في بورصة', 'https://chat.whatsapp.com/KcUfPmVbRG3G9w5vKtspW6', '🗻');
