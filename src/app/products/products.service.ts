import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  productsArr = [];

  setProdClassArr(products){
    this.productsArr = products;
    console.log(this.productsArr)
  }

  returnProdClassArr(){
    return this.productsArr;
  }

  cartItemsArr = [];

  cartCounter: number = 0;

  getCartCounter(){
    return this.cartCounter;
  }

  decCounter(){
    this.cartCounter -= 1;
  }

  setCartItemsArr(cartItems){
    this.cartItemsArr.push(cartItems)
    this.cartCounter += 1
    console.log(this.cartItemsArr)
  }

  getCartItemsArr(){
    return this.cartItemsArr;
  }

  removeCartItem(prod){
    for(let i of this.cartItemsArr)
      if(i == prod)
        i.splice(prod,1);
  }


  getProducts(){
    return[
      {SerialNumber:"T1",Name:"XTERRA TRX3500", Price:529.99, Category:"Treadmill", Description:"Maximize your home workouts with the XTERRA Fitness TRX3500 folding treadmill. It combines quality, performance, and great looks with the premium features you desire in a home treadmill. The console display features a large 6.5” Blue Backlit LCD display with 30 preset programs for users of all fitness levels. Other convenient features include the console direct access speed and incline buttons for fast workout changes, additional handlebar mounted controls for both speed and incline, speakers for your favorite tunes, and a cooling fan to keep you cool.", ImgUrl:"https://images-na.ssl-images-amazon.com/images/I/71JP%2Bd3aFNL._AC_SL1500_.jpg", Quantity: 1},
      {SerialNumber:"T2",Name:"NordicTrack T 6.5s",Price:549.65,Category:"Treadmill",Description:"Interactive Fitness at Your Fingertips. Unlock an exciting new world of on-demand personal training with the NordicTrack T 6.5 S smart treadmill powered by iFit. With iFit (1-month individual membership included), you get more than a treadmill, you get interactive personal training at home. Follow your favorite iFit Trainers as they coach you through exciting studio classes and breathtaking global workouts - all while auto-adjusting your treadmill’s speed and incline for a fully immersive experience. The T 6.5 S is powered by a SMART-Response motor and features a 20” x 55” treadmill belt with FlexSelect deck cushioning for a more comfortable run and recovery. Interactive Personal Training at Home powered by iFit: Access a vast library of on-demand studio and global workouts led by expert personal trainers. Connect your own tablet or smartphone (not included) to your treadmill to let your trainers auto-adjust your speed and incline for an optimized workout.",ImgUrl:"https://images-na.ssl-images-amazon.com/images/I/71CmokS1dhS._AC_SL1500_.jpg", Quantity: 1},
      {SerialNumber:"T3",Name:"OMA 5108EB",Price:319.79,Category:"Treadmill",Description:"OMA HOME TREADMILLS- OMA are committed to producing high quality and reliable treadmills. Focus on HOME EXERCISE, GOOD QUALITY, and HEALTHY LIFE. Deeply loved and trusted by thousands of families.",ImgUrl:"https://images-na.ssl-images-amazon.com/images/I/61VWQw0CM4L._AC_SL1500_.jpg", Quantity: 1},
      {SerialNumber:"T4",Name:"RUNOW Folding",Price:188.50,Category:"Treadmill",Description:"SILENCE & SAFETY FUNCTION:compact treadmill with powerful motor and auto-stop safety function,Up to 8.0mph running speed with working noise lower than 60db,the treadmill equipped with the safety key so it can stop immediately in emergency situations-Double safety protection.Level 6 damping system, high strength, high density, high elasticity double deck running board, anti-slip anti-static lawn texture belt .",ImgUrl:"https://images-na.ssl-images-amazon.com/images/I/51t2lbFv6iL._AC_SL1000_.jpg", Quantity: 1},
      {SerialNumber:"T5",Name:"Ovicx Foldable",Price:276.99,Category:"Treadmill",Description:"The Wekeep treadmill uses a new folding technology to achieve 90° folding. It can be placed vertically and covers an area of less than 0.5 square meters. The function of automatically sensing fatigue and speed reduction brings users an immersive exercise experience, and in conjunction with the Fitshow exercise software, it brings personalized exercise enjoyment for users who love running.",ImgUrl:"https://images-na.ssl-images-amazon.com/images/I/815CHa3wZiL._AC_SL1500_.jpg", Quantity: 1},
      {SerialNumber:'k1',Name:'Iron Kettlebell Weight',Price:50,Category:'Kettlebell',Description:'Kettlebell supports a wide range of resistance-training exercises Made of solid high-quality cast iron for reliable built-to-last strength',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/81uQlThoT1S._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'K2',Name:'RBX Cement Kettlebell',Price:30,Category:'Kettlebell',Description:'The RBX 10lb kettlebell builds muscles, develops strength endurance, enhances core strength. ',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/81OjistneiL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'K3',Name:'MBAT Black PE Kettlebell ',Price:35,Category:'Kettlebell',Description:'MBAT Kettlebells are available in different weights, allowing you to work out many muscle groups and body parts with performing swings.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/51BwNg%2BRtoL._AC_SL1000_.jpg', Quantity: 1},
      {SerialNumber:'K4',Name:'Yes4All Solid Cast Iron Kettlebell',Price:45,Category:'Kettlebell',Description:'15 LBS HIGH-QUALITY SOLID CAST IRON KETTLEBELL: Built to last - constructed of solid cast iron with no welds, weak spots, or seams. Great for training indoor & outdoor',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/71R43zbU4FL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'K5',Name:'Jpodream Kettlebell ',Price:60,Category:'Kettlebell',Description:'Adjustable weights are 5lb, 8lb, 9lb, 12lb kettlebell to help you tailor your workout to your own needs【CONVENIENT ADJUSTMENT】 It only takes a few seconds to adjust the product to the required weight, which is safe and reliable.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/61bIjz9gTgL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'L1',Name:'Marcy Adjustable 6 Position Utility Bench ',Price:130,Category:'legs machine',Description:'6-POSITION ADJUSTABLE BACK PAD – This utility bench has an adjustable back that can be altered to suit your workout routine. It features a secure sawtooth back pad adjustment design that can be modified to an incline, flat, or decline position',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/71MWpRtdktL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'L2',Name:'leikefitness Deluxe',Price:150,Category:'legs machine',Description:'Sissy squat is the best bodyweight exercise to train your abs, thighs and glutes. Sissy squats build muscle, strength, balance, durability and flexibility',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/61VICKXNppL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'L3',Name:'Fitness Squat Assist',Price:140,Category:'legs machine',Description:'ADJUSTABLE SQUAT DEPTH: Adjust the saddle angle to 30, 60, or 90 degrees to add depth to your squat and variety to your workout program.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/711zwW8W0wL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'L4',Name:'SNODE Water Rowing ',Price:430,Category:'legs machine',Description:'The water rowing machine is specially designed to approach the real stroke on water, making your rowing experience more real and challenging.. The water resistance creates a smooth and steady rowing experience with every stroke.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/61riRXJ4lDS._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'L5',Name:'Sportsroyals',Price:120,Category:'legs machine',Description:'SportsRoyals are committed to producing high quality and reliable step fitness machines for 20 years. Deeply loved and trusted by 100000 families.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/61Ou8aJH-vL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'D1',Name:'5 Tier Dumbbell Rack',Price:300,Category:'Dumbbell',Description:'Dumbells Storage Racks are made of steel, this weight rack will hold up to 300 pounds worth of dumbbells.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/81755kMNROL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'D2',Name:'Sporzon',Price:88,Category:'Dumbbell',Description:'Solid metal chrome finish contoured (ergo) handles designed to fit comfortably. Textured handle provides a tight and secure grip Hexagon shape rubber encased heads help prevent rolling and and provide easier storage',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/91JulKbUlNL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'D3',Name:'CAP Barbell',Price:25,Category:'Dumbbell',Description:'Perfect for training individual muscle groups or major muscle groups, HITT training and walking',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/71smB-5WtzL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'D4',Name:'ATIVAFIT Adjustable Dumbbell',Price:220,Category:'Dumbbell',Description:'We sell the ATIVAFIT adjustable dumbbell for Single, if you need 2 dumbbells, please add 2 items, thankNotice: We sell the ATIVAFIT adjustable dumbbell 55 lbs for Single, if you need 2 dumbbells, please add 2 items,',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/51imkAtJ19L._AC_SL1000_.jpg', Quantity: 1},
      {SerialNumber:'D5',Name:'AyeKu ',Price:210,Category:'Dumbbell',Description:'Suitable for Professional and beginner - AyeKu Adjustable dumbbell offers wide weight range from 11lb 22lb 33lb 44lb 55lb. It could bring rich exercises feeling during training for both professionals and beginners.',ImgUrl:'https://m.media-amazon.com/images/I/718MsZJniXL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'TR1',Name:'TRX ALL-IN-ONE Suspension Training',Price:170,Category:'Bands',Description:'Simple and easy setup allows the TRX Suspension Trainer to be set up in 60 seconds. Anchor off any door, tree branch, rafter, beam or secured elevation point',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/81WHuOpgHyL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'TR2',Name:'TRX Buddy Lee Jump Rope',Price:34,Category:'Bands',Description:'PRECISION JUMP ROPE: Developed by Olympian wrestler and jump rope master Buddy Lee, this precision jump rope provides the perfect heart-rate elevating cardio blast for any workout.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/31CHwTyFY-L._AC_.jpg', Quantity: 1},
      {SerialNumber:'TR3',Name:'Resistance Bands Set',Price:50,Category:'Bands',Description:'The second generation, thicker than the metal on the market, stronger interface,Yellow 10 lbs,Green 15 lbs,Blue20 lbs,Black 25 lbs,Red 30 lbs.These bands can be used individually or stacked in any combination, and you can get training with different strengths whenever you want.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/71H6BbdeqbL._AC_SL1494_.jpg', Quantity: 1},
      {SerialNumber:'TR4',Name:'XGEAR Heavy Battle Rope',Price:56,Category:'Bands',Description:'Battle Rope is the best tool to tone muscles and aerobic endurance.Feel the core tightening while in the workout session, enhance strength in abs, arm, shoulders, back and legs to accomplish your fitness goals effectively with our unrivaled combat rope.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/81xl8E3ClVL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'TR5',Name:'MhIL 5 Resistance Bands',Price:16,Category:'Bands',Description:'Superior quality - being able to train anywhere you want. With MHILs short, non-slip resistance bands, youll receive the most comfortable bands with thick, wide, and flexible fabric that stays elastic over time and is not too tight or loose, giving you the best workout. The soft and lightweight premium odorless fabric is made of polyester and latex. It is specially designed so that it does not roll or pinch.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/81Gypz4YkeS._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'CH1',Name:'OUTLANDWAY Chest Expander',Price:19,Category:'Chest machine',Description:'5 ADJUSTABLE RESISTANCE SPRINGS - The kit includes 5 adjustable resistance springs, so you can easily set the tension level that suits your workout.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/61OF9NbNRFL._AC_SL1200_.jpg', Quantity: 1},
      {SerialNumber:'CH2',Name:'hosote',Price:37,Category:'Chest machine',Description:'Power twister that can adjust different resistances by turning the resistance button, which is more user-friendly than traditional spring arm strength devices. this fitness equipment adjustable from 22-440lbs with 2-20 levels. Just easily rotate the knobs, you can choose the level which suits you the best.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/61d0MAcnHrL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'CH3',Name:'Bowflex',Price:600,Category:'Chest machine',Description:'Multi-use hand grip/ankle cuffs designed to add flexibility and performance to any workout using the Quick Change Power Rod system',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/81ixJlnBuNL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'CH4',Name:'Marcy MD-5191 ',Price:5000,Category:'Chest machine',Description:'Equipped with multi-grip pull-up bars, this gear allows you to efficiently execute exercises for the upper body such as pull ups, chin ups, hanging leg raises. You can also use the bar to attach resistance bands',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/71-78jBAENL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'CH5',Name:'INNSTAR Adjustable Bench Press',Price:105,Category:'Chest machine',Description:'INNSTAR Bench Press (Push Up) Resistance Band unlike the conventional heavy bench press equipment, its super light, small, portable, and easy to pack up for travel. It will be convenient for you to have efficient exercises anywhere.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/614QhGxl16L._AC_SL1000_.jpg', Quantity: 1},
    ];
  }

  getProductsOnSale(){
    return[
      {SerialNumber:'K5',Name:'Jpodream Kettlebell ',Price:60,Category:'Kettlebell',Description:'Adjustable weights are 5lb, 8lb, 9lb, 12lb kettlebell to help you tailor your workout to your own needs【CONVENIENT ADJUSTMENT】 It only takes a few seconds to adjust the product to the required weight, which is safe and reliable.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/61bIjz9gTgL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'D1',Name:'5 Tier Dumbbell Rack',Price:300,Category:'Dumbbell',Description:'Dumbells Storage Racks are made of steel, this weight rack will hold up to 300 pounds worth of dumbbells.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/81755kMNROL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'CH4',Name:'Marcy MD-5191 ',Price:5000,Category:'Chest machine',Description:'Equipped with multi-grip pull-up bars, this gear allows you to efficiently execute exercises for the upper body such as pull ups, chin ups, hanging leg raises. You can also use the bar to attach resistance bands',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/71-78jBAENL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:"T5",Name:"Ovicx Foldable",Price:276.99,Category:"Treadmill",Description:"The Wekeep treadmill uses a new folding technology to achieve 90° folding. It can be placed vertically and covers an area of less than 0.5 square meters. The function of automatically sensing fatigue and speed reduction brings users an immersive exercise experience, and in conjunction with the Fitshow exercise software, it brings personalized exercise enjoyment for users who love running.",ImgUrl:"https://images-na.ssl-images-amazon.com/images/I/815CHa3wZiL._AC_SL1500_.jpg", Quantity: 1},
      {SerialNumber:'L3',Name:'Fitness Squat Assist',Price:140,Category:'legs machine',Description:'ADJUSTABLE SQUAT DEPTH: Adjust the saddle angle to 30, 60, or 90 degrees to add depth to your squat and variety to your workout program.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/711zwW8W0wL._AC_SL1500_.jpg', Quantity: 1}
    ];
  }

  getNewProducts(){
    return[
      {SerialNumber:"T1",Name:"XTERRA TRX3500", Price:529.99, Category:"Treadmill", Description:"Maximize your home workouts with the XTERRA Fitness TRX3500 folding treadmill. It combines quality, performance, and great looks with the premium features you desire in a home treadmill. The console display features a large 6.5” Blue Backlit LCD display with 30 preset programs for users of all fitness levels. Other convenient features include the console direct access speed and incline buttons for fast workout changes, additional handlebar mounted controls for both speed and incline, speakers for your favorite tunes, and a cooling fan to keep you cool.", ImgUrl:"https://images-na.ssl-images-amazon.com/images/I/71JP%2Bd3aFNL._AC_SL1500_.jpg", Quantity: 1},
      {SerialNumber:'K3',Name:'MBAT Black PE Kettlebell ',Price:35,Category:'Kettlebell',Description:'MBAT Kettlebells are available in different weights, allowing you to work out many muscle groups and body parts with performing swings.',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/51BwNg%2BRtoL._AC_SL1000_.jpg', Quantity: 1},
      {SerialNumber:'CH3',Name:'Bowflex',Price:600,Category:'Chest machine',Description:'Multi-use hand grip/ankle cuffs designed to add flexibility and performance to any workout using the Quick Change Power Rod system',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/81ixJlnBuNL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'L2',Name:'leikefitness Deluxe',Price:150,Category:'legs machine',Description:'Sissy squat is the best bodyweight exercise to train your abs, thighs and glutes. Sissy squats build muscle, strength, balance, durability and flexibility',ImgUrl:'https://images-na.ssl-images-amazon.com/images/I/61VICKXNppL._AC_SL1500_.jpg', Quantity: 1},
      {SerialNumber:'D5',Name:'AyeKu ',Price:210,Category:'Dumbbell',Description:'Suitable for Professional and beginner - AyeKu Adjustable dumbbell offers wide weight range from 11lb 22lb 33lb 44lb 55lb. It could bring rich exercises feeling during training for both professionals and beginners.',ImgUrl:'https://m.media-amazon.com/images/I/718MsZJniXL._AC_SL1500_.jpg', Quantity: 1},
    ];
  }
}
