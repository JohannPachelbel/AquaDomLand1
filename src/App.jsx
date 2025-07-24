import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Award, 
  Users, 
  Droplets,
  Wrench,
  Shield,
  Heart,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import images
import modernBathroom from './assets/20250724_0252_Современнаяваннаякомната_simple_compose_01k0wv4krbe0rv8d77dadjqnw2.png'
import showerCabin from './assets/20250724_0257_Минималистичнаядушеваякабина_simple_compose_01k0wvd7szf3jrapn13aw1pktv.png'
import sensorFaucet from './assets/20250724_0300_СенсорнаяКухоннаяРоскошь_simple_compose_01k0wvkddqexjtxd3mhwcwyean.png'
import toiletGuide from './assets/20250724_0303_ВыборУнитазовАкваДом_simple_compose_01k0wvsc3xf01s71sd4j7s1w80.png'
import bathProtection from './assets/20250724_0306_Защитадляванной_simple_compose_01k0wvxp2jetdbyg2954f5ws5v.png'
import kitchenSinks from './assets/20250724_0309_ЭстетикаКухонныхМоек_simple_compose_01k0ww439cft488k78ztjndd5y.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const galleryImages = [
    { src: modernBathroom, title: "Современная ванная комната", description: "Обновите вашу ванную комнату уже сегодня!" },
    { src: showerCabin, title: "Гигиеничные душевые кабины", description: "Чистота, лёгкость уборки, стиль" },
    { src: sensorFaucet, title: "Сенсорная кухонная роскошь", description: "Почувствуйте технологию будущего уже сегодня!" },
    { src: toiletGuide, title: "Выбор унитазов АкваДом", description: "Выберите осознанно и правильно!" },
    { src: bathProtection, title: "Защита для ванной", description: "Охрана вашего вложения!" },
    { src: kitchenSinks, title: "Эстетика кухонных моек", description: "Справочник подбора кухонных моек" }
  ]

  const teamMembers = [
    { name: "Пётр Иванович Кузнецов", role: "Основатель и директор", experience: "30+ лет опыта" },
    { name: "Анна Петровна Кузнецова", role: "Менеджер по продажам", experience: "15+ лет опыта" },
    { name: "Михаил Петрович Кузнецов", role: "Технический консультант", experience: "10+ лет опыта" },
    { name: "Елена Сергеевна Волкова", role: "Дизайнер интерьеров", experience: "8+ лет опыта" }
  ]

  const awards = [
    { year: "2015", title: "Лучший продавец санитарии столицы", description: "Победитель конкурса" },
    { year: "2018", title: "Региональный бренд качества", description: "Лауреат премии" },
    { year: "2020", title: "МосСтройЭкспо", description: "Участник выставки" },
    { year: "2022", title: "ИнтерСанТех", description: "Участник выставки" }
  ]

  const assortment = [
    { icon: <Droplets className="w-8 h-8" />, title: "Умывальники и раковины", description: "Любых форм и стилей" },
    { icon: <Shield className="w-8 h-8" />, title: "Ванны и джакузи", description: "Из акрила, чугуна и стали" },
    { icon: <Wrench className="w-8 h-8" />, title: "Душевые кабины", description: "Современное душевое оборудование" },
    { icon: <Heart className="w-8 h-8" />, title: "Смесители и краны", description: "Ведущих брендов" },
    { icon: <Star className="w-8 h-8" />, title: "Унитазы премиум-класса", description: "Подвесные и напольные" },
    { icon: <Award className="w-8 h-8" />, title: "Полотенцесушители", description: "Высококачественные аксессуары" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Droplets className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                АкваДом
              </span>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['О нас', 'История', 'Команда', 'Ассортимент', 'Награды', 'Галерея', 'Контакты'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-blue-100"
            >
              {['О нас', 'История', 'Команда', 'Ассортимент', 'Награды', 'Галерея', 'Контакты'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/20 to-teal-400/20"
        />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              АкваДом
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Уютный семейный магазин сантехнических изделий премиум-класса. 
              Три поколения качества и заботы о каждом клиенте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg"
              >
                Посмотреть каталог
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                Связаться с нами
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-blue-600" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="о-нас" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              О нас
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              «АкваДом» — это уютный семейный магазин сантехнических изделий, созданный в духе традиций 
              комфорта и заботы о каждом клиенте. Расположенный в живописном районе центра Москвы, 
              наш магазин предлагает своим посетителям исключительно качественную продукцию для 
              комфортного оснащения ванн, кухонь и санузлов.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-12 h-12" />, title: "Качество", description: "Хорошее качество начинается там, где заканчивается компромисс" },
              { icon: <Heart className="w-12 h-12" />, title: "Забота", description: "Индивидуальный подход к каждому покупателю" },
              { icon: <Award className="w-12 h-12" />, title: "Опыт", description: "Три поколения семьи Кузнецовых в сфере сантехники" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300 border-blue-100">
                  <CardContent className="p-0">
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="история" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              История
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-blue-100">
              <CardContent className="p-0">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    История нашего семейного бизнеса началась почти три десятилетия назад. 
                    Основатель магазина, Пётр Иванович Кузнецов, будучи опытным специалистом-сантехником, 
                    столкнулся с проблемой выбора надежных комплектующих и оборудования.
                  </p>
                  <p className="text-lg">
                    Именно тогда зародилась идея организовать собственное предприятие, которое предоставляло бы 
                    покупателям действительно качественные товары и внимательное обслуживание.
                  </p>
                  <p className="text-lg">
                    Сначала это была небольшая лавка с минимальным ассортиментом рядом с домом Петрова Ивановича. 
                    Но благодаря честному отношению к делу и качественному подбору продуктов, клиенты стали 
                    доверять магазину всё больше.
                  </p>
                  <p className="text-lg font-semibold text-blue-700">
                    Теперь «АкваДом» гордится своей репутацией надежного поставщика сантехнического 
                    оборудования и аксессуаров высочайшего класса.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="команда" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Наша команда
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              У нас работают профессионалы, которые знают свою работу и любят помогать клиентам. 
              Каждый сотрудник готов подробно рассказать обо всех особенностях выбранного товара.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-blue-100">
                  <CardContent className="p-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      {member.experience}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assortment Section */}
      <section id="ассортимент" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Ассортимент
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              В нашем ассортименте представлены товары высочайшего качества для комфортного 
              оснащения ванн, кухонь и санузлов.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assortment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-blue-100 hover:border-blue-300">
                  <CardContent className="p-0">
                    <div className="text-blue-600 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-blue-100">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Дополнительные услуги</h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Доставка</h4>
                    <p className="text-gray-600">Покупок удобным способом клиенту домой или на объект строительства</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Монтаж</h4>
                    <p className="text-gray-600">Профессиональный монтаж приобретенных изделий нашими специалистами</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Консультации</h4>
                    <p className="text-gray-600">По выбору оптимального решения для любого бюджета и пространства</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="награды" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Награды и достижения
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              За годы успешной работы мы получили признание профессионалов отрасли и 
              заслужили доверие тысяч довольных клиентов.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow duration-300 border-blue-100">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="outline" className="mb-3 border-blue-200 text-blue-700">
                      {award.year}
                    </Badge>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">{award.title}</h3>
                    <p className="text-gray-600 text-sm">{award.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="галерея" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Галерея
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Познакомьтесь с нашими лучшими решениями и вдохновитесь идеями для вашего дома.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="контакты" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Контакты
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Приглашаем посетить наш магазин! Здесь вы найдете лучшие решения для улучшения 
              комфортности и удобства вашего жилья.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Phone className="w-8 h-8" />, title: "Телефон", info: "+7 (495) 123-45-67" },
              { icon: <Mail className="w-8 h-8" />, title: "Email", info: "info@akvadom.ru" },
              { icon: <MapPin className="w-8 h-8" />, title: "Адрес", info: "ул. Водопроводная, дом 7, Москва" },
              { icon: <Clock className="w-8 h-8" />, title: "Режим работы", info: "ПН-ПТ: 8:00–20:00\nСБ: 9:00–18:00\nВС: выходной" }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow duration-300 border-blue-100">
                  <CardContent className="p-0">
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {contact.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-800">{contact.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{contact.info}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Готовы обновить ваш дом?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Обращайтесь к нам — сделаем ваш дом лучше вместе!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    Позвонить сейчас
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Написать email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Droplets className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">АкваДом</span>
            </div>
            <p className="text-gray-400 mb-4">
              Магазин сантехники премиум-класса
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 АкваДом</span>
              <span>•</span>
              <span>Все права защищены</span>
              <span>•</span>
              <span>www.akvadom.ru</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

