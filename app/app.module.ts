import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { DisplayhelloworldComponent } from "./components/displayhelloworld/displayhelloworld.componentng";
import { DisplaynameComponent } from "./components/displayname/displayname.component";
import { ShowhellobuttonComponent } from "./components/showhellobutton/showhellobutton.component";
import { UserageComponent } from "./components/userage/userage.component";
import {UsergreetingComponent} from "./components/usergreeting/usergreeting.component";
import {WordcounterComponent} from "./components/wordcounter/wordcounter.component";
import {RandomnumbergeneratorComponent} from "./components/randomnumbergenerator/randomnumbergenerator.component";
import {MultiplicationcheckerComponent} from "./components/multiplicationchecker/multiplicationchecker.component";
import {UppercaseconverterComponent} from "./components/uppercaseconverter/uppercaseconverter.component";
import {WordshufflerComponent} from "./components/wordshuffler/wordshuffler.component";
import {BmisolverComponent} from "./components/bmisolver/bmisolver.component";
import {UsernamevalidatorComponent} from "./components/usernamevalidator/usernamevalidator.component";
import {InterestcalculatorComponent} from "./components/interestcalculator/interestcalculator.component";
import {CompoundinterestcalculatorComponent} from "./components/compoundinterestcalculator/compoundinterestcalculator.component";
import {FibonaccigeneratorComponent} from "./components/fibonaccigenerator/fibonaccigenerator.component";
import {OddsumcalculatorComponent} from "./components/oddsumcalculator/oddsumcalculator.component";
import {CurrencyformatterComponent} from "./components/currencyformatter/currencyformatter.component";
import {RandomquotedisplayComponent} from "./components/randomquotedisplay/randomquotedisplay.component";
import {UppercasegreetingComponent} from "./components/uppercasegreeting/uppercasegreeting.component";
import {DivisiblecheckerComponent} from "./components/divisiblechecker/divisiblechecker.component";
import {SimpleformComponent} from "./components/simpleform/simpleform.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {TextlengthComponent} from "./components/textlength/textlength.component";
import {CurrencyconverterComponent} from "./components/currencyconverter/currencyconverter.component";
import {EvenoddcheckerComponent} from "./components/evenoddchecker/evenoddchecker.component";
import {WordreverserComponent} from "./components/wordreverser/wordreverser.component";
import {ShowdateComponent} from "./components/showdate/showdate.component";
import {MultiplicationtableComponent} from "./components/multiplicationtable/multiplicationtable.component";
import {SimpleloginComponent} from "./components/simplelogin/simplelogin.component";
import {FahrenheittocelsiusComponent} from "./components/fahrenheittocelsius/fahrenheittocelsius.component";
import {ShowusernameComponent} from "./components/showusername/showusername.component";
import {BookmarklistComponent} from "./components/bookmarklist/bookmarklist.component";
import {CharactercounterComponent} from "./components/charactercounter/charactercounter.component";
import {PalindromecheckerComponent} from "./components/palindromechecker/palindromechecker.component";
import {TemperatureconverterComponent} from "./components/temperatureconverter/temperatureconverter.component";
import {ShoppinglistComponent} from "./components/shoppinglist/shoppinglist.component";
import {FactorialcalculatorComponent} from "./components/factorialcalculator/factorialcalculator.component";
import {TodomanagerComponent} from "./components/todomanager/todomanager.component";
import {GuessnumbergameComponent} from "./components/guessnumbergame/guessnumbergame.component";
import {LowercaseconverterComponent} from "./components/lowercaseconverter/lowercaseconverter.component";
import {PercentagecalculatorComponent} from "./components/percentagecalculator/percentagecalculator.component";
import {TemperaturefeelingComponent} from "./components/temperaturefeeling/temperaturefeeling.component";
import {MultiplesofthreeComponent} from "./components/multiplesofthree/multiplesofthree.component";
import {SquarerootfinderComponent} from "./components/squarerootfinder/squarerootfinder.component";
import {UsernameuppercaseComponent} from "./components/usernameuppercase/usernameuppercase.component";
import {GreetinselectedlanguageComponent} from "./components/greetinselectedlanguage/greetinselectedlanguage.component";
import {LeapyearcheckerComponent} from "./components/leapyearchecker/leapyearchecker.component";
import {AreacalculatorComponent} from "./components/areacalculator/areacalculator.component";
import {LowercasegreetingComponent} from "./components/lowercasegreeting/lowercasegreeting.component";




const routes: Routes = [
  //{path: '', component: AppComponent},
  {path: 'displayhelloworld', component: DisplayhelloworldComponent},
  {path: 'displayname', component: DisplaynameComponent},
  {path: 'showhellobutton', component: ShowhellobuttonComponent},
  {path: 'userage', component: UserageComponent},
  {path: 'simpleform', component: SimpleformComponent},
  {path: 'usergreeting', component: UsergreetingComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'textlength', component: TextlengthComponent},
  {path: 'currencyconverter', component: CurrencyconverterComponent},
  {path: 'wordreverser', component: WordreverserComponent},
  {path: 'showusername', component: ShowusernameComponent},
  {path: 'showdate', component: ShowdateComponent},
  {path: 'multiplicationtable', component: MultiplicationtableComponent},
  {path: 'bookmarklist', component: BookmarklistComponent},
  {path: 'charactercounter', component: CharactercounterComponent},
  {path: 'palindromechecker', component: PalindromecheckerComponent},
  {path: 'temperatureconverter', component: TemperatureconverterComponent},
  {path: 'shoppinglist', component: ShoppinglistComponent},
  {path: 'wordcounter', component: WordcounterComponent},
  {path: 'randomnumbergenerator', component: RandomnumbergeneratorComponent},
  {path: 'multiplicationchecker', component: MultiplicationcheckerComponent},
  {path: 'uppercaseconverter', component: UppercaseconverterComponent},
  {path: 'wordshuffler', component: WordshufflerComponent},
  {path: 'bmisolver', component: BmisolverComponent},
  {path: 'usernamevalidator', component: UsernamevalidatorComponent},
  {path: 'interestcalculator', component: InterestcalculatorComponent},
  {path: 'compoundinterestcalculator', component: CompoundinterestcalculatorComponent},
  {path: 'fibonaccigenerator', component: FibonaccigeneratorComponent},
  {path: 'oddsumcalculator', component: OddsumcalculatorComponent},
  {path: 'currencyformatter', component: CurrencyformatterComponent},
  {path: 'randomquotedisplay', component: RandomquotedisplayComponent},
  {path: 'uppercasegreeting', component: UppercasegreetingComponent},
  {path: 'divisiblechecker', component: DivisiblecheckerComponent},
  {path: 'evenoddchecker', component: EvenoddcheckerComponent},
  {path: 'simplelogin', component: SimpleloginComponent},
  {path: 'fahrenheittocelsius', component: FahrenheittocelsiusComponent},
  {path: 'factorialcalculator', component: FactorialcalculatorComponent},
  {path: 'todomanager', component: TodomanagerComponent},
  {path: 'guessnumbergame', component: GuessnumbergameComponent},
  {path: 'lowercaseconverter', component: LowercaseconverterComponent},
  {path: 'percentagecalculator', component: PercentagecalculatorComponent},
  {path: 'temperaturefeeling', component: TemperaturefeelingComponent},
  {path: 'multiplesofthree', component: MultiplesofthreeComponent},
  {path: 'squarerootfinder', component: SquarerootfinderComponent},
  {path: 'usernameuppercase', component: UsernameuppercaseComponent},
  {path: 'greetinselectedlanguage', component: GreetinselectedlanguageComponent},
  {path: 'leapyearchecker', component: LeapyearcheckerComponent},
  {path: 'areacalculator', component: AreacalculatorComponent},
  {path: 'lowercasegreeting', component: LowercasegreetingComponent},
]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    DisplaynameComponent,
    ShowhellobuttonComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    WordcounterComponent,
    RandomnumbergeneratorComponent,
    MultiplicationcheckerComponent,
    UppercaseconverterComponent,
    WordshufflerComponent,
    BmisolverComponent,
    UsernamevalidatorComponent,
    InterestcalculatorComponent,
    CompoundinterestcalculatorComponent,
    FibonaccigeneratorComponent,
    OddsumcalculatorComponent,
    CurrencyformatterComponent,
    RandomquotedisplayComponent,
    UppercasegreetingComponent,
    DivisiblecheckerComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    ShowusernameComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureconverterComponent,
    ShoppinglistComponent,
    FactorialcalculatorComponent,
    TodomanagerComponent,
    GuessnumbergameComponent,
    LowercaseconverterComponent,
    PercentagecalculatorComponent,
    TemperaturefeelingComponent,
    MultiplesofthreeComponent,
    SquarerootfinderComponent,
    UsernameuppercaseComponent,
    GreetinselectedlanguageComponent,
    LeapyearcheckerComponent,
    AreacalculatorComponent,
    LowercasegreetingComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent]
})

export class AppModule {}
