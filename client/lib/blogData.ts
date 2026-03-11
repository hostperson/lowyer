import type { Language } from './translations';

export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  date: string;
  image: string;
  title: string;
  excerpt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
}

const blogData: Record<Language, BlogPost[]> = {
  tr: [
    {
      id: '1',
      slug: 'antalya-gayrimenkul-hukuku-yabanci-yatirimcilar',
      category: 'Gayrimenkul Hukuku',
      date: '2026-02-15',
      image: '',
      title: 'Antalya\'da Gayrimenkul Hukuku: Yabancı Yatırımcılar İçin Rehber',
      excerpt: 'Antalya\'da gayrimenkul satın almak isteyen yabancı yatırımcılar için hukuki süreçler, tapu işlemleri ve dikkat edilmesi gereken önemli noktalar.',
      metaTitle: 'Antalya Gayrimenkul Hukuku - Yabancı Yatırımcı Rehberi | Ceylan Hukuk',
      metaDescription: 'Antalya\'da gayrimenkul satın almak isteyen yabancılar için hukuki rehber. Tapu işlemleri, vatandaşlık başvurusu, yatırım danışmanlığı. Ceylan Hukuk Bürosu.',
      tags: ['gayrimenkul', 'antalya', 'yabancı yatırımcı', 'tapu', 'vatandaşlık'],
      content: `## Antalya'da Gayrimenkul Yatırımı ve Hukuki Süreçler

Antalya, Türkiye'nin en çok yabancı yatırımcı çeken şehirlerinden biridir. Akdeniz iklimi, gelişmiş altyapısı ve cazip gayrimenkul fiyatları ile her yıl binlerce yabancı uyruklu kişi Antalya'da mülk satın almaktadır.

### Yabancıların Gayrimenkul Edinme Hakkı

Türk hukukunda yabancıların gayrimenkul edinmesi, 2644 sayılı Tapu Kanunu'nun 35. maddesi ile düzenlenmiştir. Buna göre, karşılıklılık ilkesi çerçevesinde yabancı gerçek kişiler Türkiye'de gayrimenkul satın alabilmektedir. Ancak bazı sınırlamalar mevcuttur:

- Askeri yasak bölgelerde gayrimenkul edinimi mümkün değildir
- Bir yabancı kişi, Türkiye genelinde en fazla 30 hektar taşınmaz edinebilir
- Toplam edinim, ilçe yüzölçümünün %10'unu geçemez

### Tapu İşlemleri ve Gerekli Belgeler

Antalya'da gayrimenkul satın alma sürecinde aşağıdaki belgeler gereklidir:

1. **Pasaport** ve noter onaylı Türkçe tercümesi
2. **Vergi numarası** (yerel vergi dairesinden alınır)
3. **Değerleme raporu** (SPK lisanslı değerleme şirketinden)
4. **DASK poliçesi** (zorunlu deprem sigortası)
5. **Banka dekontu** (ödeme kanıtı)

### Vatandaşlık Yoluyla Gayrimenkul Yatırımı

2022 yılı itibarıyla, Türkiye'de en az 400.000 USD değerinde gayrimenkul satın alan yabancılar, Türk vatandaşlığına başvuru hakkı kazanmaktadır. Bu süreçte:

- Gayrimenkulün 3 yıl süreyle satılmaması şartı aranır
- Değerleme raporu zorunludur
- Başvuru süresi ortalama 3-6 ay arasındadır

### Ceylan Hukuk Bürosu Olarak Hizmetlerimiz

Ceylan Hukuk Bürosu olarak, 1987'den beri Antalya bölgesinde yabancı yatırımcılara gayrimenkul hukuku alanında profesyonel destek sağlamaktayız. Tapu işlemlerinden vatandaşlık başvurularına, kira sözleşmelerinden imar hukuku uyuşmazlıklarına kadar geniş bir yelpazede hizmet vermekteyiz.

**Detaylı bilgi ve danışmanlık için bizimle iletişime geçin.**`
    },
    {
      id: '2',
      slug: 'istanbul-ticaret-hukuku-sirket-kurulus',
      category: 'Ticaret Hukuku',
      date: '2026-01-20',
      image: '',
      title: 'İstanbul\'da Şirket Kuruluşu: Ticaret Hukuku Rehberi',
      excerpt: 'İstanbul\'da şirket kurmak isteyen girişimciler ve yabancı yatırımcılar için ticaret hukuku kapsamında şirket türleri, kuruluş süreçleri ve yasal yükümlülükler.',
      metaTitle: 'İstanbul Şirket Kuruluşu - Ticaret Hukuku Rehberi | Ceylan Hukuk',
      metaDescription: 'İstanbul\'da şirket kuruluşu için hukuki rehber. Limited ve anonim şirket kuruluşu, yabancı yatırımcılar için prosedürler. Ceylan Hukuk Bürosu.',
      tags: ['ticaret hukuku', 'istanbul', 'şirket kuruluşu', 'limited şirket', 'anonim şirket'],
      content: `## İstanbul'da Şirket Kuruluşu ve Ticaret Hukuku

İstanbul, Türkiye'nin ticaret merkezi olarak her yıl binlerce yeni şirketin kurulduğu dinamik bir metropoldür. Doğru hukuki danışmanlık ile şirket kuruluş sürecinizi sorunsuz bir şekilde tamamlayabilirsiniz.

### Türk Ticaret Kanunu'na Göre Şirket Türleri

6102 sayılı Türk Ticaret Kanunu çerçevesinde kurulabilecek başlıca şirket türleri:

**1. Limited Şirket (Ltd. Şti.)**
- Minimum sermaye: 10.000 TL
- En az 1, en fazla 50 ortak
- Ortakların sorumluluğu taahhüt ettikleri sermaye ile sınırlıdır
- KOBİ'ler için en yaygın tercih edilen şirket türüdür

**2. Anonim Şirket (A.Ş.)**
- Minimum sermaye: 50.000 TL
- En az 1 ortak (üst sınır yoktur)
- Halka arz imkanı mevcuttur
- Büyük ölçekli yatırımlar için uygundur

**3. Şahıs Şirketi**
- Sermaye şartı yoktur
- Tek kişi tarafından kurulabilir
- Ortağın sınırsız sorumluluğu vardır

### Yabancı Yatırımcılar İçin Şirket Kuruluşu

4875 sayılı Doğrudan Yabancı Yatırımlar Kanunu uyarınca, yabancı yatırımcılar Türk vatandaşlarıyla eşit koşullarda şirket kurabilmektedir. Gerekli belgeler:

1. Pasaport noter onaylı tercümesi
2. Apostil belgesi
3. Potansiyel vergi numarası
4. İmza sirküleri
5. Şirket ana sözleşmesi

### İstanbul Ticaret Odası Kayıt Süreci

Şirket kuruluş işlemleri, MERSİS üzerinden elektronik ortamda başlatılmakta ve İstanbul Ticaret Sicil Müdürlüğü'nde tamamlanmaktadır. Ortalama süreç 3-5 iş günüdür.

### Vergisel Yükümlülükler

- **Kurumlar Vergisi:** %25
- **KDV:** %1, %10 veya %20
- **Stopaj vergisi**
- **SGK primleri**

### Profesyonel Hukuki Destek

Ceylan Hukuk Bürosu olarak, İstanbul'da şirket kuruluşundan ticari sözleşmelerin hazırlanmasına, şirket birleşme ve devralmalardan ticari uyuşmazlıkların çözümüne kadar kapsamlı hukuki destek sağlamaktayız.

**Ticaret hukuku alanında uzman kadromuzla yanınızdayız.**`
    },
    {
      id: '3',
      slug: 'turkiye-vatandaslik-hukuku-basvuru-sureci',
      category: 'Vatandaşlık Hukuku',
      date: '2025-12-10',
      image: '',
      title: 'Türk Vatandaşlığı Başvuru Süreci: Güncel Mevzuat ve Şartlar',
      excerpt: 'Türk vatandaşlığı edinme yolları, yatırım yoluyla vatandaşlık, evlilik yoluyla vatandaşlık ve istisnai vatandaşlık başvuru süreçleri hakkında detaylı bilgi.',
      metaTitle: 'Türk Vatandaşlığı Başvurusu - Güncel Şartlar 2026 | Ceylan Hukuk',
      metaDescription: 'Türk vatandaşlığı başvuru süreci, yatırım yoluyla vatandaşlık, evlilik yoluyla vatandaşlık şartları. Antalya ve İstanbul\'da uzman avukat desteği.',
      tags: ['vatandaşlık', 'türk vatandaşlığı', 'yatırım', 'pasaport', 'göçmenlik'],
      content: `## Türk Vatandaşlığı Edinme Yolları

Türk vatandaşlığı, 5901 sayılı Türk Vatandaşlık Kanunu ile düzenlenmektedir. Yabancı uyruklu kişiler çeşitli yollarla Türk vatandaşlığı kazanabilmektedir.

### 1. Yatırım Yoluyla Vatandaşlık

Cumhurbaşkanlığı Kararı ile belirlenen şartları yerine getiren yabancılar, istisnai olarak Türk vatandaşlığı kazanabilir:

- **Gayrimenkul yatırımı:** En az 400.000 USD değerinde taşınmaz satın alınması (3 yıl satılmama şartı)
- **Sermaye yatırımı:** En az 500.000 USD sabit sermaye yatırımı
- **İstihdam:** En az 50 kişiye istihdam sağlanması
- **Banka mevduatı:** En az 500.000 USD tutarında 3 yıl vadeli mevduat

### 2. Genel Başvuru Yoluyla Vatandaşlık

5 yıl kesintisiz Türkiye'de ikamet eden yabancılar başvurabilir. Şartlar:

- Kendi millî hukukuna, Türk kanunlarına ve ahlak kurallarına uygun davranmak
- Genel sağlık bakımından tehlike oluşturacak bir hastalığı bulunmamak
- Yeterli düzeyde Türkçe bilmek
- Türkiye'de geçimini sağlayacak gelire sahip olmak
- Millî güvenlik ve kamu düzeni bakımından engel oluşturmamak

### 3. Evlilik Yoluyla Vatandaşlık

Bir Türk vatandaşı ile en az 3 yıldır evli olan yabancılar başvuruda bulunabilir. Ek şartlar:

- Aile birliği içinde yaşama
- Evliliğe aykırı faaliyette bulunmama
- Millî güvenlik ve kamu düzeni açısından engel bulunmaması

### Başvuru Süreci

1. Nüfus Müdürlüğü'ne başvuru
2. Güvenlik soruşturması
3. Komisyon değerlendirmesi
4. Bakanlık onayı
5. Vatandaşlık töreni

Süreç ortalama 3-12 ay sürmektedir.

### Ceylan Hukuk Bürosu Uzmanlığı

Antalya ve İstanbul ofislerimizle, vatandaşlık başvurularınızda A'dan Z'ye profesyonel destek sağlıyoruz. Başvuru öncesi danışmanlıktan süreç takibine kadar yanınızdayız.

**Vatandaşlık danışmanlığı için randevu alın.**`
    },
    {
      id: '4',
      slug: 'antalya-aile-hukuku-bosanma-sureci',
      category: 'Aile Hukuku',
      date: '2025-11-05',
      image: '',
      title: 'Antalya\'da Aile Hukuku: Boşanma Süreci ve Nafaka Hakları',
      excerpt: 'Türk hukukunda boşanma sebepleri, anlaşmalı ve çekişmeli boşanma süreçleri, nafaka türleri, velayet ve mal paylaşımı hakkında kapsamlı bilgi.',
      metaTitle: 'Antalya Aile Hukuku Avukatı - Boşanma ve Nafaka | Ceylan Hukuk',
      metaDescription: 'Antalya\'da boşanma avukatı. Anlaşmalı boşanma, çekişmeli boşanma, nafaka, velayet, mal paylaşımı konularında uzman hukuki destek. Ceylan Hukuk Bürosu.',
      tags: ['aile hukuku', 'boşanma', 'nafaka', 'velayet', 'antalya'],
      content: `## Türk Hukukunda Boşanma Süreci

Aile hukuku, bireylerin en hassas dönemlerinde profesyonel hukuki desteğe en çok ihtiyaç duyduğu alandır. Türk Medeni Kanunu kapsamında boşanma süreçleri iki ana kategoride incelenmektedir.

### Anlaşmalı Boşanma (TMK m. 166/3)

Anlaşmalı boşanma için gerekli şartlar:
- Evliliğin en az 1 yıl sürmüş olması
- Eşlerin birlikte başvurması veya birinin başvurusunun diğerince kabul edilmesi
- Hakimin tarafları bizzat dinlemesi
- Hakimin düzenlemeyi uygun bulması

Anlaşmalı boşanma protokolünde şu konular düzenlenir:
- Çocukların velayeti ve kişisel ilişki
- Nafaka (iştirak ve yoksulluk nafakası)
- Maddi ve manevi tazminat
- Mal paylaşımı

### Çekişmeli Boşanma

Özel boşanma nedenleri:
1. **Zina** (TMK m. 161)
2. **Hayata kast, pek kötü muamele** (TMK m. 162)
3. **Suç işleme ve haysiyetsiz hayat sürme** (TMK m. 163)
4. **Terk** (TMK m. 164)
5. **Akıl hastalığı** (TMK m. 165)

### Nafaka Türleri

- **Tedbir nafakası:** Dava süresince ödenir
- **İştirak nafakası:** Çocuğun bakım giderleri için
- **Yoksulluk nafakası:** Boşanma sonrası ekonomik durumu bozulacak eş için

### Mal Paylaşımı

01.01.2002 tarihinden sonra edinilen mallar için edinilmiş mallara katılma rejimi uygulanır. Evlilik süresince edinilen mallar eşit olarak paylaşılır.

### Antalya'da Aile Hukuku Desteği

Av. Fatma Ceylan liderliğinde, aile hukuku alanında uzman kadromuzla Antalya ve İstanbul'da müvekkillerimize hassas ve profesyonel destek sağlıyoruz.

**Gizlilik ve güvenle yanınızdayız.**`
    },
    {
      id: '5',
      slug: 'istanbul-icra-iflas-hukuku-alacak-takibi',
      category: 'İcra ve İflas Hukuku',
      date: '2025-10-18',
      image: '',
      title: 'İstanbul\'da İcra ve İflas Hukuku: Alacak Takibi Rehberi',
      excerpt: 'İcra takibi türleri, itiraz süreçleri, ihtiyati haciz, konkordato ve iflas prosedürleri hakkında güncel hukuki bilgiler.',
      metaTitle: 'İstanbul İcra İflas Hukuku Avukatı - Alacak Takibi | Ceylan Hukuk',
      metaDescription: 'İstanbul\'da icra iflas hukuku avukatı. Alacak takibi, ihtiyati haciz, konkordato başvurusu, borçlu-alacaklı hakları. Ceylan Hukuk Bürosu.',
      tags: ['icra hukuku', 'iflas', 'alacak takibi', 'istanbul', 'haciz'],
      content: `## İcra ve İflas Hukuku: Alacak Tahsil Yolları

Ticari hayatın vazgeçilmez bir parçası olan alacak takibi, 2004 sayılı İcra ve İflas Kanunu çerçevesinde düzenlenmektedir. İstanbul'un yoğun ticari yapısı nedeniyle icra takipleri büyük önem taşımaktadır.

### İcra Takibi Türleri

**1. İlamsız İcra Takibi**
Mahkeme kararı olmadan başlatılabilir. Borçluya ödeme emri gönderilir. Borçlu 7 gün içinde itiraz edebilir.

**2. İlamlı İcra Takibi**
Mahkeme kararına dayanan takip türüdür. İcra müdürlüğüne mahkeme kararı ile başvurulur.

**3. Kambiyo Senetlerine Özgü Takip**
Çek, senet ve poliçe gibi kambiyo senetlerine dayanan özel takip yoludur. Borçlunun itiraz süresi 5 gündür.

### İhtiyati Haciz

Alacağın güvence altına alınması amacıyla, dava açmadan veya icra takibi başlatmadan önce mahkemeden talep edilebilir. Şartlar:
- Alacağın vadesinin gelmiş olması
- Borçlunun kaçma hazırlığında olması veya mallarını kaçırma girişimi

### Konkordato Süreci

Mali durumu bozulan ancak iyileşme potansiyeli olan şirketler için konkordato imkanı bulunmaktadır:

1. Ticaret mahkemesine başvuru
2. Geçici mühlet kararı (3 ay + 2 ay uzatma)
3. Kesin mühlet (1 yıl + 6 ay uzatma)
4. Konkordato projesinin hazırlanması
5. Alacaklılar toplantısı ve onay süreci

### İflas Prosedürü

İflas, tacir sıfatına sahip borçluların tüm malvarlığının tasfiyesi yoluyla alacaklıların tatmin edilmesi sürecidir. İflas yoluna ancak Ticaret Mahkemesi kararıyla gidilebilir.

### Profesyonel İcra Takibi Desteği

Ceylan Hukuk Bürosu olarak, İstanbul'daki geniş müvekkil portföyümüzle icra ve iflas hukuku alanında etkin çözümler sunuyoruz.

**Alacak takibi ve icra süreçleriniz için bize ulaşın.**`
    },
  ],
  en: [
    {
      id: '1',
      slug: 'antalya-real-estate-law-foreign-investors',
      category: 'Real Estate Law',
      date: '2026-02-15',
      image: '',
      title: 'Real Estate Law in Antalya: A Guide for Foreign Investors',
      excerpt: 'Legal processes, title deed procedures and important points for foreign investors looking to purchase real estate in Antalya, Turkey.',
      metaTitle: 'Antalya Real Estate Law - Foreign Investor Guide | Ceylan Law',
      metaDescription: 'Legal guide for foreigners buying property in Antalya. Title deed procedures, citizenship application, investment consulting. Ceylan Law Office.',
      tags: ['real estate', 'antalya', 'foreign investor', 'title deed', 'citizenship'],
      content: `## Real Estate Investment in Antalya: Legal Framework

Antalya is one of Turkey's most attractive cities for foreign real estate investors. With its Mediterranean climate, developed infrastructure, and competitive property prices, thousands of foreign nationals purchase property in Antalya each year.

### Foreign Property Ownership Rights

Under Turkish law, foreign nationals' right to acquire real estate is regulated by Article 35 of the Land Registry Law No. 2644. Subject to reciprocity principles, foreign individuals can purchase property in Turkey, with certain limitations:

- Property acquisition in military restricted zones is not permitted
- A foreign individual can acquire a maximum of 30 hectares of property across Turkey
- Total acquisition cannot exceed 10% of the district's surface area

### Title Deed Procedures and Required Documents

The following documents are required for property purchase in Antalya:

1. **Passport** and notarized Turkish translation
2. **Tax identification number** (obtained from local tax office)
3. **Appraisal report** (from CMB-licensed valuation company)
4. **DASK policy** (mandatory earthquake insurance)
5. **Bank receipt** (proof of payment)

### Citizenship Through Real Estate Investment

As of 2022, foreign nationals who purchase real estate worth at least $400,000 USD in Turkey are eligible to apply for Turkish citizenship:

- The property must not be sold for 3 years
- An appraisal report is mandatory
- Processing time averages 3-6 months

### Our Services at Ceylan Law Office

Since 1987, Ceylan Law Office has been providing professional legal support to foreign investors in the Antalya region in the field of real estate law. From title deed procedures to citizenship applications, from lease agreements to zoning disputes, we offer a wide range of services.

**Contact us for detailed information and consultation.**`
    },
    {
      id: '2',
      slug: 'istanbul-commercial-law-company-formation',
      category: 'Commercial Law',
      date: '2026-01-20',
      image: '',
      title: 'Company Formation in Istanbul: Commercial Law Guide',
      excerpt: 'A comprehensive guide covering company types, establishment procedures, and legal obligations for entrepreneurs and foreign investors in Istanbul.',
      metaTitle: 'Istanbul Company Formation - Commercial Law Guide | Ceylan Law',
      metaDescription: 'Legal guide for company formation in Istanbul. LLC and joint stock company establishment, procedures for foreign investors. Ceylan Law Office.',
      tags: ['commercial law', 'istanbul', 'company formation', 'LLC', 'joint stock company'],
      content: `## Company Formation and Commercial Law in Istanbul

Istanbul is a dynamic metropolis where thousands of new companies are established each year as Turkey's commercial hub. With proper legal guidance, you can complete your company formation process smoothly.

### Company Types Under Turkish Commercial Code

Main company types that can be established under the Turkish Commercial Code No. 6102:

**1. Limited Liability Company (LLC)**
- Minimum capital: TRY 10,000
- At least 1, maximum 50 shareholders
- Shareholders' liability is limited to their committed capital
- Most preferred company type for SMEs

**2. Joint Stock Company (JSC)**
- Minimum capital: TRY 50,000
- At least 1 shareholder (no upper limit)
- IPO possibility available
- Suitable for large-scale investments

### Company Formation for Foreign Investors

Under the Foreign Direct Investment Law No. 4875, foreign investors can establish companies under equal conditions with Turkish citizens. Required documents include:

1. Notarized passport translation
2. Apostille certificate
3. Potential tax number
4. Signature circular
5. Articles of association

### Professional Legal Support

At Ceylan Law Office, we provide comprehensive legal support in Istanbul from company formation to drafting commercial contracts, from mergers and acquisitions to resolving commercial disputes.

**Our expert team in commercial law is by your side.**`
    },
    {
      id: '3',
      slug: 'turkish-citizenship-application-process',
      category: 'Citizenship Law',
      date: '2025-12-10',
      image: '',
      title: 'Turkish Citizenship Application: Current Regulations and Requirements',
      excerpt: 'Detailed information on pathways to Turkish citizenship including investment-based, marriage-based, and exceptional citizenship applications.',
      metaTitle: 'Turkish Citizenship Application - Requirements 2026 | Ceylan Law',
      metaDescription: 'Turkish citizenship application process, citizenship by investment, citizenship by marriage requirements. Expert attorney support in Antalya and Istanbul.',
      tags: ['citizenship', 'Turkish citizenship', 'investment', 'passport', 'immigration'],
      content: `## Pathways to Turkish Citizenship

Turkish citizenship is regulated by the Turkish Citizenship Law No. 5901. Foreign nationals can acquire Turkish citizenship through various pathways.

### 1. Citizenship by Investment

Foreign nationals who meet the conditions set by Presidential Decree can acquire Turkish citizenship exceptionally:

- **Real estate investment:** Purchase of property worth at least $400,000 USD (3-year holding requirement)
- **Capital investment:** Fixed capital investment of at least $500,000 USD
- **Employment:** Creating employment for at least 50 people
- **Bank deposit:** 3-year time deposit of at least $500,000 USD

### 2. General Application

Foreign nationals who have resided in Turkey continuously for 5 years may apply, subject to meeting various conditions including Turkish language proficiency and financial self-sufficiency.

### 3. Citizenship by Marriage

Foreign nationals married to a Turkish citizen for at least 3 years may apply, provided they live in family unity and do not engage in activities contrary to the marriage.

### Our Expertise at Ceylan Law Office

With our Antalya and Istanbul offices, we provide A-to-Z professional support for your citizenship applications.

**Schedule a consultation for citizenship advisory.**`
    },
    {
      id: '4',
      slug: 'antalya-family-law-divorce-process',
      category: 'Family Law',
      date: '2025-11-05',
      image: '',
      title: 'Family Law in Antalya: Divorce Process and Alimony Rights',
      excerpt: 'Comprehensive information on divorce grounds in Turkish law, contested and uncontested divorce processes, alimony types, custody and property division.',
      metaTitle: 'Antalya Family Law Attorney - Divorce and Alimony | Ceylan Law',
      metaDescription: 'Divorce attorney in Antalya. Uncontested divorce, contested divorce, alimony, custody, property division. Expert legal support. Ceylan Law Office.',
      tags: ['family law', 'divorce', 'alimony', 'custody', 'antalya'],
      content: `## Divorce Process in Turkish Law

Family law requires professional legal support during one of the most sensitive periods of individuals' lives. Under the Turkish Civil Code, divorce processes are examined in two main categories.

### Uncontested Divorce (TCC Art. 166/3)

Requirements for uncontested divorce:
- Marriage must have lasted at least 1 year
- Both spouses must apply jointly or one's application must be accepted by the other
- The judge must personally hear both parties

### Contested Divorce

Specific grounds for divorce include adultery, threat to life, committing crimes, abandonment, and mental illness.

### Types of Alimony

- **Interim alimony:** Paid during the lawsuit
- **Child support:** For child's care expenses
- **Poverty alimony:** For the spouse whose economic situation will deteriorate after divorce

### Family Law Support in Antalya

Under the leadership of Av. Fatma Ceylan, we provide sensitive and professional support to our clients in Antalya and Istanbul with our expert team in family law.

**We are by your side with confidentiality and trust.**`
    },
    {
      id: '5',
      slug: 'istanbul-bankruptcy-law-debt-collection',
      category: 'Bankruptcy Law',
      date: '2025-10-18',
      image: '',
      title: 'Bankruptcy and Debt Collection in Istanbul: A Legal Guide',
      excerpt: 'Current legal information on types of enforcement proceedings, objection processes, preliminary attachment, concordat, and bankruptcy procedures.',
      metaTitle: 'Istanbul Bankruptcy Law Attorney - Debt Collection | Ceylan Law',
      metaDescription: 'Bankruptcy law attorney in Istanbul. Debt collection, preliminary attachment, concordat applications, debtor-creditor rights. Ceylan Law Office.',
      tags: ['bankruptcy law', 'debt collection', 'istanbul', 'enforcement', 'concordat'],
      content: `## Bankruptcy and Enforcement Law: Debt Collection Methods

Debt collection, an essential part of commercial life, is regulated under the Enforcement and Bankruptcy Law No. 2004. Due to Istanbul's intensive commercial structure, enforcement proceedings are of great importance.

### Types of Enforcement Proceedings

**1. Non-Adjudicated Enforcement** - Can be initiated without a court order. The debtor has 7 days to object.

**2. Adjudicated Enforcement** - Based on a court decision. Application to enforcement office with court order.

**3. Enforcement Based on Negotiable Instruments** - Special enforcement for checks, promissory notes, and bills of exchange. Debtor's objection period is 5 days.

### Professional Enforcement Support

At Ceylan Law Office, we offer effective solutions in bankruptcy and enforcement law with our extensive client portfolio in Istanbul.

**Contact us for your debt collection and enforcement processes.**`
    },
  ],
  de: [
    {
      id: '1',
      slug: 'antalya-immobilienrecht-auslaendische-investoren',
      category: 'Immobilienrecht',
      date: '2026-02-15',
      image: '',
      title: 'Immobilienrecht in Antalya: Leitfaden für Ausländische Investoren',
      excerpt: 'Rechtliche Verfahren, Grundbuchverfahren und wichtige Punkte für ausländische Investoren, die in Antalya Immobilien erwerben möchten.',
      metaTitle: 'Antalya Immobilienrecht - Ausländischer Investorenleitfaden | Ceylan Kanzlei',
      metaDescription: 'Rechtsberatung für Ausländer, die in Antalya Immobilien kaufen. Grundbuchverfahren, Staatsbürgerschaftsantrag, Investitionsberatung. Ceylan Kanzlei.',
      tags: ['immobilien', 'antalya', 'ausländische investoren', 'grundbuch', 'staatsbürgerschaft'],
      content: `## Immobilieninvestition in Antalya: Rechtlicher Rahmen

Antalya ist eine der attraktivsten Städte der Türkei für ausländische Immobilieninvestoren. Mit mediterranem Klima, entwickelter Infrastruktur und wettbewerbsfähigen Immobilienpreisen erwerben jährlich Tausende von Ausländern Eigentum in Antalya.

### Eigentumsrechte für Ausländer

Das türkische Recht erlaubt ausländischen Staatsangehörigen den Erwerb von Immobilien gemäß Artikel 35 des Grundbuchgesetzes Nr. 2644, mit bestimmten Einschränkungen:

- Kein Immobilienerwerb in militärischen Sperrgebieten
- Maximal 30 Hektar pro ausländische Person in der gesamten Türkei
- Nicht mehr als 10% der Bezirksfläche

### Staatsbürgerschaft durch Immobilieninvestition

Ausländer, die Immobilien im Wert von mindestens 400.000 USD in der Türkei erwerben, haben das Recht, die türkische Staatsbürgerschaft zu beantragen. Die Immobilie darf 3 Jahre lang nicht verkauft werden.

### Unsere Dienstleistungen

Seit 1987 unterstützt die Kanzlei Ceylan ausländische Investoren in der Region Antalya im Bereich Immobilienrecht.

**Kontaktieren Sie uns für detaillierte Informationen und Beratung.**`
    },
    {
      id: '2',
      slug: 'istanbul-handelsrecht-firmengruendung',
      category: 'Handelsrecht',
      date: '2026-01-20',
      image: '',
      title: 'Firmengründung in Istanbul: Handelsrecht-Leitfaden',
      excerpt: 'Umfassender Leitfaden über Unternehmensformen, Gründungsverfahren und rechtliche Pflichten für Unternehmer und ausländische Investoren in Istanbul.',
      metaTitle: 'Istanbul Firmengründung - Handelsrecht-Leitfaden | Ceylan Kanzlei',
      metaDescription: 'Rechtsberatung zur Firmengründung in Istanbul. GmbH- und AG-Gründung, Verfahren für ausländische Investoren. Ceylan Kanzlei.',
      tags: ['handelsrecht', 'istanbul', 'firmengründung', 'GmbH', 'AG'],
      content: `## Firmengründung und Handelsrecht in Istanbul

Istanbul ist als Handelszentrum der Türkei eine dynamische Metropole. Mit der richtigen Rechtsberatung können Sie den Firmengründungsprozess reibungslos abwickeln.

### Unternehmensformen nach türkischem Handelsgesetzbuch

**1. GmbH (Limited Şirket)**
- Mindestkapital: 10.000 TL
- 1-50 Gesellschafter
- Haftung auf Kapitaleinlage beschränkt

**2. Aktiengesellschaft (Anonim Şirket)**
- Mindestkapital: 50.000 TL
- Mindestens 1 Aktionär
- Börsengang möglich

### Firmengründung für ausländische Investoren

Ausländische Investoren können unter gleichen Bedingungen wie türkische Staatsbürger Unternehmen gründen.

### Professionelle Rechtsberatung

Die Kanzlei Ceylan bietet umfassende rechtliche Unterstützung in Istanbul.

**Unser Expertenteam im Handelsrecht steht Ihnen zur Seite.**`
    },
    {
      id: '3',
      slug: 'tuerkische-staatsbuergerschaft-antrag',
      category: 'Staatsangehörigkeitsrecht',
      date: '2025-12-10',
      image: '',
      title: 'Türkische Staatsbürgerschaft: Aktuelle Voraussetzungen und Verfahren',
      excerpt: 'Detaillierte Informationen über Wege zur türkischen Staatsbürgerschaft durch Investition, Heirat und außerordentliche Anträge.',
      metaTitle: 'Türkische Staatsbürgerschaft - Voraussetzungen 2026 | Ceylan Kanzlei',
      metaDescription: 'Türkische Staatsbürgerschaft Antragsverfahren, Staatsbürgerschaft durch Investition, Heirat. Expertenanwalt in Antalya und Istanbul.',
      tags: ['staatsbürgerschaft', 'investition', 'pass', 'einwanderung'],
      content: `## Wege zur Türkischen Staatsbürgerschaft

Die türkische Staatsbürgerschaft wird durch das Türkische Staatsangehörigkeitsgesetz Nr. 5901 geregelt.

### 1. Staatsbürgerschaft durch Investition

- **Immobilien:** Mindestens 400.000 USD (3-jährige Haltepflicht)
- **Kapitalinvestition:** Mindestens 500.000 USD Festkapitalanlage
- **Beschäftigung:** Mindestens 50 Arbeitsplätze
- **Bankeinlage:** Mindestens 500.000 USD für 3 Jahre

### 2. Allgemeiner Antrag

Ausländer mit 5 Jahren ununterbrochenem Aufenthalt in der Türkei können einen Antrag stellen.

### 3. Staatsbürgerschaft durch Heirat

Ausländer, die seit mindestens 3 Jahren mit einem türkischen Staatsbürger verheiratet sind.

### Unsere Expertise

Mit unseren Büros in Antalya und Istanbul bieten wir umfassende Unterstützung.

**Vereinbaren Sie einen Beratungstermin.**`
    },
    {
      id: '4',
      slug: 'antalya-familienrecht-scheidung',
      category: 'Familienrecht',
      date: '2025-11-05',
      image: '',
      title: 'Familienrecht in Antalya: Scheidungsverfahren und Unterhaltsrechte',
      excerpt: 'Umfassende Informationen über Scheidungsgründe, einvernehmliche und streitige Scheidung, Unterhaltsarten, Sorgerecht und Vermögensaufteilung.',
      metaTitle: 'Antalya Familienrecht Anwalt - Scheidung und Unterhalt | Ceylan Kanzlei',
      metaDescription: 'Scheidungsanwalt in Antalya. Einvernehmliche Scheidung, Unterhalt, Sorgerecht, Vermögensaufteilung. Ceylan Kanzlei.',
      tags: ['familienrecht', 'scheidung', 'unterhalt', 'sorgerecht', 'antalya'],
      content: `## Scheidungsverfahren im Türkischen Recht

Das Familienrecht erfordert professionelle rechtliche Unterstützung in einer der sensibelsten Lebensphasen.

### Einvernehmliche Scheidung

- Ehe muss mindestens 1 Jahr bestanden haben
- Beide Ehegatten müssen gemeinsam beantragen
- Der Richter muss beide Parteien persönlich anhören

### Streitige Scheidung

Besondere Scheidungsgründe: Ehebruch, Lebensbedrohung, Straftaten, Verlassung, Geisteskrankheit.

### Unterhaltsarten

- **Einstweiliger Unterhalt** während des Verfahrens
- **Kindesunterhalt** für Betreuungskosten
- **Bedürftigkeitsunterhalt** nach der Scheidung

### Familienrecht-Unterstützung in Antalya

Unter der Leitung von Av. Fatma Ceylan bieten wir professionelle Unterstützung.

**Wir stehen Ihnen vertraulich zur Seite.**`
    },
    {
      id: '5',
      slug: 'istanbul-insolvenzrecht-forderungseinzug',
      category: 'Insolvenzrecht',
      date: '2025-10-18',
      image: '',
      title: 'Insolvenz- und Vollstreckungsrecht in Istanbul: Leitfaden zum Forderungseinzug',
      excerpt: 'Aktuelle rechtliche Informationen über Vollstreckungsverfahren, Einspruchsverfahren, vorläufige Pfändung und Insolvenz.',
      metaTitle: 'Istanbul Insolvenzrecht Anwalt - Forderungseinzug | Ceylan Kanzlei',
      metaDescription: 'Insolvenzrecht-Anwalt in Istanbul. Forderungseinzug, Pfändung, Konkordatsantrag. Ceylan Kanzlei.',
      tags: ['insolvenzrecht', 'forderungseinzug', 'istanbul', 'vollstreckung'],
      content: `## Insolvenz- und Vollstreckungsrecht in Istanbul

Der Forderungseinzug ist ein wesentlicher Bestandteil des Geschäftslebens und wird durch das Vollstreckungs- und Insolvenzgesetz Nr. 2004 geregelt.

### Vollstreckungsverfahren

**1. Mahnverfahren** - Ohne gerichtliche Entscheidung einleitbar. 7 Tage Einspruchsfrist.

**2. Titelbasierte Vollstreckung** - Auf Grundlage eines Gerichtsurteils.

**3. Wechselrechtliche Vollstreckung** - Für Schecks, Wechsel und Schuldscheine. 5 Tage Einspruchsfrist.

### Professionelle Unterstützung

Die Kanzlei Ceylan bietet effektive Lösungen im Insolvenzrecht in Istanbul.

**Kontaktieren Sie uns für Ihre Forderungseinzugsverfahren.**`
    },
  ],
  ru: [
    {
      id: '1',
      slug: 'antalya-nedvizhimost-pravo-inostrannye-investory',
      category: 'Право на недвижимость',
      date: '2026-02-15',
      image: '',
      title: 'Право на Недвижимость в Анталии: Руководство для Иностранных Инвесторов',
      excerpt: 'Юридические процессы, процедуры оформления права собственности и важные моменты для иностранных инвесторов, желающих приобрести недвижимость в Анталии.',
      metaTitle: 'Право на Недвижимость Анталия - Руководство Инвестора | Ceylan Юридическая',
      metaDescription: 'Юридическое руководство для иностранцев, покупающих недвижимость в Анталии. Оформление ТАПУ, заявление на гражданство. Юридическая контора Ceylan.',
      tags: ['недвижимость', 'анталия', 'иностранный инвестор', 'тапу', 'гражданство'],
      content: `## Инвестиции в Недвижимость в Анталии: Правовая База

Анталия - один из самых привлекательных городов Турции для иностранных инвесторов в недвижимость. Средиземноморский климат, развитая инфраструктура и доступные цены на недвижимость привлекают тысячи иностранцев ежегодно.

### Права Иностранцев на Приобретение Недвижимости

Согласно статье 35 Закона о земельном кадастре № 2644, иностранные граждане могут приобретать недвижимость в Турции с определёнными ограничениями:

- Запрет на приобретение в военных зонах
- Максимум 30 гектаров на одного иностранца
- Не более 10% площади района

### Гражданство через Инвестиции в Недвижимость

Иностранцы, приобретающие недвижимость стоимостью не менее 400 000 долларов США, могут подать заявление на турецкое гражданство. Недвижимость не должна продаваться в течение 3 лет.

### Наши Услуги

С 1987 года юридическая контора Ceylan оказывает профессиональную поддержку иностранным инвесторам в регионе Анталии.

**Свяжитесь с нами для консультации.**`
    },
    {
      id: '2',
      slug: 'stambul-torgovoe-pravo-sozdanie-kompanii',
      category: 'Торговое право',
      date: '2026-01-20',
      image: '',
      title: 'Создание Компании в Стамбуле: Руководство по Торговому Праву',
      excerpt: 'Полное руководство по видам компаний, процедурам создания и юридическим обязательствам для предпринимателей и иностранных инвесторов в Стамбуле.',
      metaTitle: 'Создание Компании Стамбул - Торговое Право | Ceylan Юридическая',
      metaDescription: 'Юридическое руководство по созданию компании в Стамбуле. ООО и АО, процедуры для иностранных инвесторов. Юридическая контора Ceylan.',
      tags: ['торговое право', 'стамбул', 'создание компании', 'ООО', 'АО'],
      content: `## Создание Компании и Торговое Право в Стамбуле

Стамбул - динамичный мегаполис и торговый центр Турции.

### Виды Компаний

**1. ООО (Limited Şirket)** - Минимальный капитал: 10 000 TL, от 1 до 50 участников.

**2. Акционерное Общество (Anonim Şirket)** - Минимальный капитал: 50 000 TL, без ограничения участников.

### Создание Компании Иностранцами

Иностранные инвесторы могут создавать компании на равных условиях с турецкими гражданами.

### Профессиональная Поддержка

Юридическая контора Ceylan обеспечивает комплексную правовую поддержку в Стамбуле.

**Наша команда экспертов в торговом праве к вашим услугам.**`
    },
    {
      id: '3',
      slug: 'turetskoe-grazhdanstvo-zayavlenie',
      category: 'Право гражданства',
      date: '2025-12-10',
      image: '',
      title: 'Турецкое Гражданство: Актуальные Требования и Процедуры',
      excerpt: 'Подробная информация о путях получения турецкого гражданства: через инвестиции, брак и исключительные заявления.',
      metaTitle: 'Турецкое Гражданство - Требования 2026 | Ceylan Юридическая',
      metaDescription: 'Процедура получения турецкого гражданства, гражданство через инвестиции, через брак. Юридическая контора Ceylan в Анталии и Стамбуле.',
      tags: ['гражданство', 'инвестиции', 'паспорт', 'иммиграция'],
      content: `## Пути Получения Турецкого Гражданства

### 1. Гражданство через Инвестиции
- **Недвижимость:** от 400 000 USD (3 года без продажи)
- **Капитальные вложения:** от 500 000 USD
- **Трудоустройство:** создание 50+ рабочих мест
- **Банковский вклад:** от 500 000 USD на 3 года

### 2. Общее Заявление
Иностранцы с 5-летним непрерывным проживанием в Турции.

### 3. Гражданство через Брак
Иностранцы, состоящие в браке с гражданином Турции не менее 3 лет.

### Наша Экспертиза

С офисами в Анталии и Стамбуле мы обеспечиваем полную поддержку.

**Запишитесь на консультацию.**`
    },
    {
      id: '4',
      slug: 'antalya-semeynoe-pravo-razvod',
      category: 'Семейное право',
      date: '2025-11-05',
      image: '',
      title: 'Семейное Право в Анталии: Процедура Развода и Права на Алименты',
      excerpt: 'Информация об основаниях для развода, согласительном и спорном разводе, видах алиментов, опеке и разделе имущества.',
      metaTitle: 'Анталия Семейное Право Адвокат - Развод и Алименты | Ceylan',
      metaDescription: 'Адвокат по разводам в Анталии. Согласительный развод, алименты, опека, раздел имущества. Юридическая контора Ceylan.',
      tags: ['семейное право', 'развод', 'алименты', 'опека', 'анталия'],
      content: `## Процедура Развода в Турецком Праве

### Согласительный Развод
- Брак должен длиться не менее 1 года
- Оба супруга подают совместное заявление

### Спорный Развод
Основания: измена, угроза жизни, совершение преступлений, оставление, психическое заболевание.

### Виды Алиментов
- **Временные алименты** - во время судебного разбирательства
- **Алименты на ребёнка** - на содержание детей
- **Алименты на нужды** - после развода

### Поддержка в Анталии

Под руководством Av. Fatma Ceylan мы обеспечиваем профессиональную поддержку.

**Мы рядом с вами.**`
    },
    {
      id: '5',
      slug: 'stambul-bankrotstvo-vzyskanie-dolgov',
      category: 'Право банкротства',
      date: '2025-10-18',
      image: '',
      title: 'Банкротство и Взыскание Долгов в Стамбуле: Правовое Руководство',
      excerpt: 'Актуальная юридическая информация о видах исполнительного производства, процедурах возражения и банкротства.',
      metaTitle: 'Стамбул Банкротство Адвокат - Взыскание Долгов | Ceylan',
      metaDescription: 'Адвокат по банкротству в Стамбуле. Взыскание долгов, арест имущества, конкордат. Юридическая контора Ceylan.',
      tags: ['банкротство', 'взыскание долгов', 'стамбул', 'исполнительное производство'],
      content: `## Банкротство и Исполнительное Производство в Стамбуле

### Виды Исполнительного Производства

**1. Приказное производство** - без решения суда. 7 дней на возражение.
**2. Исполнение по решению суда** - на основании судебного решения.
**3. Вексельное производство** - для чеков и векселей. 5 дней на возражение.

### Профессиональная Поддержка

Юридическая контора Ceylan предлагает эффективные решения в области банкротства.

**Свяжитесь с нами.**`
    },
  ],
  ar: [
    {
      id: '1',
      slug: 'antalya-qanun-aqarat-mustathmireen-ajanib',
      category: 'قانون العقارات',
      date: '2026-02-15',
      image: '',
      title: 'قانون العقارات في أنطاليا: دليل للمستثمرين الأجانب',
      excerpt: 'العمليات القانونية وإجراءات الطابو والنقاط المهمة للمستثمرين الأجانب الراغبين في شراء عقارات في أنطاليا.',
      metaTitle: 'قانون العقارات أنطاليا - دليل المستثمر الأجنبي | Ceylan قانوني',
      metaDescription: 'دليل قانوني للأجانب لشراء العقارات في أنطاليا. إجراءات الطابو، طلب الجنسية، الاستشارات الاستثمارية. مكتب Ceylan القانوني.',
      tags: ['عقارات', 'أنطاليا', 'مستثمر أجنبي', 'طابو', 'جنسية'],
      content: `## الاستثمار العقاري في أنطاليا: الإطار القانوني

أنطاليا هي واحدة من أكثر المدن التركية جذباً للمستثمرين العقاريين الأجانب.

### حقوق ملكية العقارات للأجانب

يسمح القانون التركي للمواطنين الأجانب بامتلاك العقارات وفقاً للمادة 35 من قانون السجل العقاري رقم 2644:

- لا يُسمح بشراء العقارات في المناطق العسكرية المحظورة
- الحد الأقصى 30 هكتاراً لكل أجنبي في تركيا
- لا يتجاوز 10% من مساحة المنطقة

### الجنسية من خلال الاستثمار العقاري

الأجانب الذين يشترون عقارات بقيمة 400,000 دولار أمريكي على الأقل يمكنهم التقدم للحصول على الجنسية التركية.

### خدماتنا

منذ عام 1987، يقدم مكتب Ceylan القانوني الدعم المهني للمستثمرين الأجانب.

**اتصل بنا للاستشارة.**`
    },
    {
      id: '2',
      slug: 'istanbul-qanun-tijari-tasis-sharikat',
      category: 'القانون التجاري',
      date: '2026-01-20',
      image: '',
      title: 'تأسيس الشركات في اسطنبول: دليل القانون التجاري',
      excerpt: 'دليل شامل حول أنواع الشركات وإجراءات التأسيس والالتزامات القانونية لرجال الأعمال والمستثمرين الأجانب في اسطنبول.',
      metaTitle: 'تأسيس شركة اسطنبول - دليل القانون التجاري | Ceylan قانوني',
      metaDescription: 'دليل قانوني لتأسيس شركة في اسطنبول. تأسيس شركة ذات مسؤولية محدودة وشركة مساهمة. مكتب Ceylan القانوني.',
      tags: ['القانون التجاري', 'اسطنبول', 'تأسيس شركة', 'شركة محدودة', 'شركة مساهمة'],
      content: `## تأسيس الشركات والقانون التجاري في اسطنبول

### أنواع الشركات

**1. شركة ذات مسؤولية محدودة** - رأس المال الأدنى: 10,000 ليرة تركية

**2. شركة مساهمة** - رأس المال الأدنى: 50,000 ليرة تركية

### تأسيس الشركات للمستثمرين الأجانب

يمكن للمستثمرين الأجانب تأسيس شركات بنفس شروط المواطنين الأتراك.

### الدعم المهني

يقدم مكتب Ceylan القانوني دعماً قانونياً شاملاً في اسطنبول.

**فريقنا من الخبراء في القانون التجاري في خدمتكم.**`
    },
    {
      id: '3',
      slug: 'jinsiya-turkiya-talab',
      category: 'قانون الجنسية',
      date: '2025-12-10',
      image: '',
      title: 'الجنسية التركية: الشروط والإجراءات الحالية',
      excerpt: 'معلومات مفصلة حول طرق الحصول على الجنسية التركية عن طريق الاستثمار والزواج والطلبات الاستثنائية.',
      metaTitle: 'الجنسية التركية - الشروط 2026 | Ceylan قانوني',
      metaDescription: 'إجراءات الحصول على الجنسية التركية، الجنسية عن طريق الاستثمار والزواج. مكتب Ceylan القانوني في أنطاليا واسطنبول.',
      tags: ['جنسية', 'استثمار', 'جواز سفر', 'هجرة'],
      content: `## طرق الحصول على الجنسية التركية

### 1. الجنسية عن طريق الاستثمار
- **عقارات:** 400,000 دولار أمريكي على الأقل (3 سنوات بدون بيع)
- **استثمار رأسمالي:** 500,000 دولار أمريكي
- **توظيف:** إنشاء 50 فرصة عمل على الأقل
- **وديعة بنكية:** 500,000 دولار أمريكي لمدة 3 سنوات

### 2. الطلب العام
الأجانب المقيمون في تركيا لمدة 5 سنوات متواصلة.

### 3. الجنسية عن طريق الزواج
الأجانب المتزوجون من مواطن تركي لمدة 3 سنوات على الأقل.

### خبرتنا

مع مكاتبنا في أنطاليا واسطنبول نقدم دعماً شاملاً.

**احجز موعداً للاستشارة.**`
    },
    {
      id: '4',
      slug: 'antalya-qanun-usra-talaq',
      category: 'قانون الأسرة',
      date: '2025-11-05',
      image: '',
      title: 'قانون الأسرة في أنطاليا: إجراءات الطلاق وحقوق النفقة',
      excerpt: 'معلومات شاملة عن أسباب الطلاق والطلاق بالتراضي والطلاق المتنازع عليه وأنواع النفقة والحضانة وتقسيم الممتلكات.',
      metaTitle: 'محامي قانون الأسرة أنطاليا - الطلاق والنفقة | Ceylan',
      metaDescription: 'محامي طلاق في أنطاليا. طلاق بالتراضي، نفقة، حضانة، تقسيم ممتلكات. مكتب Ceylan القانوني.',
      tags: ['قانون الأسرة', 'طلاق', 'نفقة', 'حضانة', 'أنطاليا'],
      content: `## إجراءات الطلاق في القانون التركي

### الطلاق بالتراضي
- يجب أن يكون الزواج قد استمر لمدة سنة واحدة على الأقل
- يجب أن يتقدم كلا الزوجين بطلب مشترك

### الطلاق المتنازع عليه
الأسباب: الخيانة، التهديد بالحياة، ارتكاب الجرائم، الهجر، المرض العقلي.

### أنواع النفقة
- **نفقة مؤقتة** أثناء الدعوى
- **نفقة الطفل** لنفقات رعاية الأطفال
- **نفقة الاحتياج** بعد الطلاق

### الدعم في أنطاليا

بقيادة المحامية Fatma Ceylan نقدم دعماً مهنياً.

**نحن بجانبكم بسرية وثقة.**`
    },
    {
      id: '5',
      slug: 'istanbul-qanun-iflas-tahsil-duyun',
      category: 'قانون الإفلاس',
      date: '2025-10-18',
      image: '',
      title: 'الإفلاس وتحصيل الديون في اسطنبول: دليل قانوني',
      excerpt: 'معلومات قانونية حديثة حول أنواع إجراءات التنفيذ والاعتراض والحجز التحفظي والإفلاس.',
      metaTitle: 'محامي إفلاس اسطنبول - تحصيل الديون | Ceylan',
      metaDescription: 'محامي قانون الإفلاس في اسطنبول. تحصيل الديون، الحجز، الصلح الواقي. مكتب Ceylan القانوني.',
      tags: ['إفلاس', 'تحصيل ديون', 'اسطنبول', 'تنفيذ'],
      content: `## الإفلاس والتنفيذ في اسطنبول

### أنواع إجراءات التنفيذ

**1. التنفيذ بدون حكم** - بدون قرار محكمة. 7 أيام للاعتراض.
**2. التنفيذ بحكم** - بناءً على قرار محكمة.
**3. التنفيذ على الأوراق التجارية** - للشيكات والسندات. 5 أيام للاعتراض.

### الدعم المهني

يقدم مكتب Ceylan القانوني حلولاً فعالة في قانون الإفلاس.

**اتصل بنا.**`
    },
  ],
};

export function getBlogPosts(language: Language): BlogPost[] {
  return blogData[language] || blogData.tr;
}

export function getBlogPost(language: Language, slug: string): BlogPost | undefined {
  const posts = getBlogPosts(language);
  return posts.find(p => p.slug === slug);
}
