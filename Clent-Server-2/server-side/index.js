const express = require ('express');
const app = express();
const port = 5000 ;
const cors = require('cors');

const users = [
  { id: 1, name: "Anastasia Ivanova", email: "anastasia1@gmail.com" },
  { id: 2, name: "Dmitry Petrov", email: "dmitry2@gmail.com" },
  { id: 3, name: "Ekaterina Sokolova", email: "ekaterina3@gmail.com" },
  { id: 4, name: "Ivan Smirnov", email: "ivan4@gmail.com" },
  { id: 5, name: "Olga Pavlova", email: "olga5@gmail.com" },
  { id: 6, name: "Nikolai Ivanov", email: "nikolai6@gmail.com" },
  { id: 7, name: "Marina Kuznetsova", email: "marina7@gmail.com" },
  { id: 8, name: "Sergey Orlov", email: "sergey8@gmail.com" },
  { id: 9, name: "Tatiana Morozova", email: "tatiana9@gmail.com" },
  { id: 10, name: "Alexei Volkov", email: "alexei10@gmail.com" },
  { id: 11, name: "Yulia Fedorova", email: "yulia11@gmail.com" },
  { id: 12, name: "Andrei Lebedev", email: "andrei12@gmail.com" },
  { id: 13, name: "Natalia Mikhailova", email: "natalia13@gmail.com" },
  { id: 14, name: "Mikhail Popov", email: "mikhail14@gmail.com" },
  { id: 15, name: "Elena Kozlova", email: "elena15@gmail.com" },
  { id: 16, name: "Vladimir Novikov", email: "vladimir16@gmail.com" },
  { id: 17, name: "Irina Vasilieva", email: "irina17@gmail.com" },
  { id: 18, name: "Oleg Pavlov", email: "oleg18@gmail.com" },
  { id: 19, name: "Svetlana Solovieva", email: "svetlana19@gmail.com" },
  { id: 20, name: "Pavel Sidorov", email: "pavel20@gmail.com" },
  { id: 21, name: "Daria Romanova", email: "daria21@gmail.com" },
  { id: 22, name: "Yuri Zaitsev", email: "yuri22@gmail.com" },
  { id: 23, name: "Galina Tarasova", email: "galina23@gmail.com" },
  { id: 24, name: "Maxim Egorov", email: "maxim24@gmail.com" },
  { id: 25, name: "Vera Dmitrieva", email: "vera25@gmail.com" },
  { id: 26, name: "Konstantin Antonov", email: "konstantin26@gmail.com" },
  { id: 27, name: "Polina Alexandrovna", email: "polina27@gmail.com" },
  { id: 28, name: "Timofey Nikitin", email: "timofey28@gmail.com" },
  { id: 29, name: "Lyudmila Belova", email: "lyudmila29@gmail.com" },
  { id: 30, name: "Denis Bogdanov", email: "denis30@gmail.com" },
  { id: 31, name: "Alla Stepanova", email: "alla31@gmail.com" },
  { id: 32, name: "Roman Gusev", email: "roman32@gmail.com" },
  { id: 33, name: "Alina Fedoseeva", email: "alina33@gmail.com" },
  { id: 34, name: "Vyacheslav Titov", email: "vyacheslav34@gmail.com" },
  { id: 35, name: "Viktoria Nikolaeva", email: "viktoria35@gmail.com" },
  { id: 36, name: "Ilya Semenov", email: "ilya36@gmail.com" },
  { id: 37, name: "Ksenia Filippova", email: "ksenia37@gmail.com" },
  { id: 38, name: "Artem Markov", email: "artem38@gmail.com" },
  { id: 39, name: "Taisiya Bogdanova", email: "taisiya39@gmail.com" },
  { id: 40, name: "Boris Makarov", email: "boris40@gmail.com" },
  { id: 41, name: "Valentina Mironova", email: "valentina41@gmail.com" },
  { id: 42, name: "Stanislav Medvedev", email: "stanislav42@gmail.com" },
  { id: 43, name: "Zoya Lebedeva", email: "zoya43@gmail.com" },
  { id: 44, name: "Egor Denisov", email: "egor44@gmail.com" },
  { id: 45, name: "Inna Zhuravleva", email: "inna45@gmail.com" },
  { id: 46, name: "Leonid Chernov", email: "leonid46@gmail.com" },
  { id: 47, name: "Vasilisa Kalinina", email: "vasilisa47@gmail.com" },
  { id: 48, name: "Kirill Savin", email: "kirill48@gmail.com" },
  { id: 49, name: "Evgenia Makarova", email: "evgenia49@gmail.com" },
  { id: 50, name: "Aleksei Belyaev", email: "aleksei50@gmail.com" },
  { id: 51, name: "Margarita Vinogradova", email: "margarita51@gmail.com" },
  { id: 52, name: "Artur Sorokin", email: "artur52@gmail.com" },
  { id: 53, name: "Tatyana Zvereva", email: "tatyana53@gmail.com" },
  { id: 54, name: "Vladislav Egorov", email: "vladislav54@gmail.com" },
  { id: 55, name: "Sofia Afanasyeva", email: "sofia55@gmail.com" },
  { id: 56, name: "Grigory Tarasov", email: "grigory56@gmail.com" },
  { id: 57, name: "Nadezhda Dmitrieva", email: "nadezhda57@gmail.com" },
  { id: 58, name: "Stepan Golubev", email: "stepan58@gmail.com" },
  { id: 59, name: "Lidiya Koroleva", email: "lidiya59@gmail.com" },
  { id: 60, name: "Viktor Sobolev", email: "viktor60@gmail.com" },
  { id: 61, name: "Nina Belousova", email: "nina61@gmail.com" },
  { id: 62, name: "Arkady Vinogradov", email: "arkady62@gmail.com" },
  { id: 63, name: "Evgeniya Zhukova", email: "evgeniya63@gmail.com" },
  { id: 64, name: "Yegor Frolov", email: "yegor64@gmail.com" },
  { id: 65, name: "Diana Lavrova", email: "diana65@gmail.com" },
  { id: 66, name: "Albert Panin", email: "albert66@gmail.com" },
  { id: 67, name: "Kira Fedotova", email: "kira67@gmail.com" },
  { id: 68, name: "Vadim Krylov", email: "vadim68@gmail.com" },
  { id: 69, name: "Larisa Cherkasova", email: "larisa69@gmail.com" },
  { id: 70, name: "Ruslan Baranov", email: "ruslan70@gmail.com" },
  { id: 71, name: "Elizaveta Komarova", email: "elizaveta71@gmail.com" },
  { id: 72, name: "Anton Loginov", email: "anton72@gmail.com" },
  { id: 73, name: "Yana Ermolova", email: "yana73@gmail.com" },
  { id: 74, name: "Oleg Voronov", email: "oleg74@gmail.com" },
  { id: 75, name: "Irina Bogdanova", email: "irina75@gmail.com" },
  { id: 76, name: "German Kudryavtsev", email: "german76@gmail.com" },
  { id: 77, name: "Alisa Ignatieva", email: "alisa77@gmail.com" },
  { id: 78, name: "Rostislav Borodin", email: "rostislav78@gmail.com" },
  { id: 79, name: "Veronika Ulyanova", email: "veronika79@gmail.com" },
  { id: 80, name: "Arkadiy Alekseev", email: "arkadiy80@gmail.com" },
  { id: 81, name: "Zinaida Kuzina", email: "zinaida81@gmail.com" },
  { id: 82, name: "Roman Lebedev", email: "roman82@gmail.com" },
  { id: 83, name: "Tamara Petrova", email: "tamara83@gmail.com" },
  { id: 84, name: "Igor Artemyev", email: "igor84@gmail.com" },
  { id: 85, name: "Mira Nikitina", email: "mira85@gmail.com" },
  { id: 86, name: "Sergei Rogov", email: "sergei86@gmail.com" },
  { id: 87, name: "Ekaterina Vlasova", email: "ekaterina87@gmail.com" },
  { id: 88, name: "Leonid Nosov", email: "leonid88@gmail.com" },
  { id: 89, name: "Natalya Krylova", email: "natalya89@gmail.com" },
  { id: 90, name: "Victor Shestakov", email: "victor90@gmail.com" },
  { id: 91, name: "Tatiana Vorobieva", email: "tatiana91@gmail.com" },
  { id: 92, name: "Yakov Melnikov", email: "yakov92@gmail.com" },
  { id: 93, name: "Vasilisa Kravtsova", email: "vasilisa93@gmail.com" },
  { id: 94, name: "Oleg Abramov", email: "oleg94@gmail.com" },
  { id: 95, name: "Anfisa Likhacheva", email: "anfisa95@gmail.com" },
  { id: 96, name: "Valery Ignatov", email: "valery96@gmail.com" },
  { id: 97, name: "Lilia Bobrova", email: "lilia97@gmail.com" },
  { id: 98, name: "Semyon Yudin", email: "semyon98@gmail.com" },
  { id: 99, name: "Diana Trofimova", email: "diana99@gmail.com" },
  { id: 100, name: "Igor Avdeev", email: "igor100@gmail.com" }
];

app.use(cors());

app.get('/', (req,res) => {
  res.send("This is Shohan's server");
})

app.get ('/users', (req,res) => {
  res.send(users);
})


app.listen(port, () => {
  console.log(`The server will run on port: localhost:${port}`);
  
})