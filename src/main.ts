import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Observable, map, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// const p = new Promise((resolve) => {
//   resolve(100);
// });
// p.then(console.log);

// const o = new Observable<number>((obs) => {
//   obs.next(1000), obs.next(2000), obs.next(3000);

//   obs.error(new Error('bad error right here!'));
//   obs.complete();
//   return () => {
//     //cleanup
//   };
// });

// o.pipe(map((num: number) => num + 1)).subscribe({
//   next: console.log,
//   error: (err) => console.error(`Error: ${err}`),
//   complete: () => console.log('Observable completed!'),
// });

// function interval(delay: number, count?: number){
//   let counter = 0;
//   return new Observable (obs=> {
//     if(count === counter){
//       obs.complete();
//       return;
//     }
//     const i = setInterval(()=>{
//       obs.next(counter++)
//     }, delay)
//     return()=>{
//       clearInterval(i)
//     }
//   })
// }

// const subscription = interval(1000, 8).subscribe({
//   next: console.log,
//    error: (err) => console.error(`Error: ${err}`),
//    complete: () => console.log('Observable completed!'),
// })

// setTimeout(()=>{
//   subscription.unsubscribe()
// }, 3000)

//SUBJECTS
// const subj$$ = new Subject();
// subj$$.subscribe(console.log); //A
// subj$$.next(123); //A
// subj$$.subscribe(console.log); //B
// subj$$.subscribe(console.log); //C
// subj$$.next(400); //A, B, C
// subj$$.subscribe({
//   next: console.log,
//      error: (err) => console.error(`Error: ${err}`),
//      complete: () => console.log('Observable completed!'),
// })

// setTimeout(() => {
//   subj$$.subscribe(console.log); //D
//   subj$$.next(200); //A, B, C, D
// }, 3000);

//behavior subject (za storvane na nqkakva stoinost, za6toto vinagi pasi posledniq state koito e nabutan v nego)
// const bSubj$$ = new BehaviorSubject(100);
// bSubj$$.subscribe((data) => console.log('subscription 1: ', data));

// setTimeout(() => {
//   bSubj$$.next(200);
//   bSubj$$.next(210);
//   bSubj$$.next(220);
//   bSubj$$.next(230);
//   bSubj$$.subscribe((data) => console.log('subscription 2: ', data));

//   setTimeout(() => {
//     bSubj$$.next(300);
//     bSubj$$.subscribe((data) => console.log('subscription 3: ', data));
//   }, 2000);
// }, 2000);

//Replay Subjects- moje da durji spisuk ot ne6ta

// const rSubj$$ = new ReplaySubject(10);
// rSubj$$.next(100);
// rSubj$$.subscribe((d)=>console.log('Subscribe 1: ', d));

// for (let i = 1; i <= 30; i++) {

//   rSubj$$.next(i);
// }
// console.log('=======================================');

// rSubj$$.subscribe((d)=>console.log('Subscribe 2: ', d));


//ASYNC SUBJECTS

const aSubj$$ = new AsyncSubject();
aSubj$$.next(1)
aSubj$$.next(2)
aSubj$$.next(3)
aSubj$$.subscribe((data) => console.log('subscription 1: ', data))
aSubj$$.next(5)
aSubj$$.subscribe((data) => console.log('subscription 2: ', data))
aSubj$$.complete();
