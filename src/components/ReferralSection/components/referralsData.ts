import { ReferralsData } from '../types';
import danielWongAvatar from './assets/daniel-wong.webp';
import victoriaKimAvatar from './assets/victoria-kim.webp';
import jamesLeeAvatar from './assets/james-lee.webp';

export const referralsData: ReferralsData[] = [
  {
    quote:
      "I wish I had discovered this app earlier! As someone who gets decision paralysis easily, this app has been a lifesaver. This app is also great for discovering new things that I may not have considered before. Overall, I'm very impressed and would recommend it to anyone who struggles with decision making.",
    name: 'Victoria Kim',
    role: 'Student',
    imageUrl: victoriaKimAvatar,
  },
  {
    quote:
      "This app has completely transformed the way I make decisions. I used to rely on random chance or recommendations from friends, but now I have a reliable tool that takes into account my unique preferences and factors in my decision making. It's so convenient and easy to use, I don't know how I ever lived without it. If you're someone who likes to make informed choices and values their time, this app is a must-have!",
    name: 'James Lee',
    role: 'Business owner',
    imageUrl: jamesLeeAvatar,
  },
  {
    quote:
      'This app is a game changer! With so many options available, I used to spend hours deciding what to choose. Now, with just a few taps, the app provides me with personalized recommendations that are spot on. It saves me time and helps me make better decisions. Highly recommend it!',
    name: 'Daniel Wong',
    role: 'Online entrepreneur',
    imageUrl: danielWongAvatar,
  },
];
