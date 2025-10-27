import {
  afterNextRender,
  // afterRender,
  Component,
  effect,
  OnChanges,
  OnInit,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')} `,
    'color: #bada55'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnChanges {

  // life cycle hooks
  // https://angular.io/guide/lifecycle-
  // methods that are called at a specific point in time
  // It is very rare that there is an application that uses many life cycle hooks.

  traditionalProperty = 'Fernando';
  signalProperty = signal('Fernando');


  // Constructor is called first
  // It is used to initialize class members but not to do any actual work.
  // Avoid any side effects in the constructor.
  // Use ngOnInit for any work that needs to be done when the component is initialized.
  // Avoid complex logic in the constructor.
  // Keep the constructor simple and focused on initializing class members.
  // Avoid injecting services that are not needed during construction.
  constructor() {
    log('Constructor is called first ');

    // setTimeout(() => {
    //   this.signalProperty.set('Juan Carlos');
    // }, 2000);
  }

  //
  changeTraditional() {
    this.traditionalProperty = 'Fernando Herrera';
  }

  changeSignal() {
    this.signalProperty.set('Fernando Herrera');
  }

  basicEffect = effect((onCleanup) => {
      log('effect', 'Fire side effects');

    onCleanup(() => {
      log('onCleanup', 'Se ejecuta cuando el efecto se va a destruir');
    });
  });

  // ngOnInit is called once the component is initialized
  // It is used to perform any additional initialization tasks
  // such as fetching data from a server or setting up event listeners.
  // It is a good place to put any logic that needs to run once
  // when the component is created.
  ngOnInit() {
    log(
      'ngOnInit',
      "Runs once after Angular has initialized all the component's inputs."
    );
  }

  // ngOnChanges is called whenever an input property changes
  // It is used to respond to changes in input properties
  // and update the component accordingly.
  // It receives a SimpleChanges object that contains the previous
  // and current values of the input properties.
  // It is a good place to put any logic that needs to run
  // whenever an input property changes.
  ngOnChanges() {
    log('ngOnChanges', "Runs every time the component's inputs have changed.");
  }

  // ngDoCheck is called during every change detection run
  // It is used to detect and respond to changes that Angular
  // doesn't catch on its own.
  // It is a good place to put any custom change detection logic.
  // Be careful when using ngDoCheck as it can be called frequently
  // and can impact performance if not used judiciously.
  ngDoCheck() {
    log('ngDoCheck', 'Runs every time this component is checked for changes.');
  }

  // ngAfterContentInit is called once after the component's content
  // has been initialized
  // It is used to perform any additional initialization tasks
  // that depend on the content being present.
  // It is a good place to put any logic that needs to run
  // once the content is available.
  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      "Runs once after the component's content has been initialized."
    );
  }

  // ngAfterContentChecked is called after the component's content
  // has been checked for changes
  // It is used to respond to changes in the content
  // and update the component accordingly.
  // It is a good place to put any logic that needs to run
  // whenever the content changes.
  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      'Runs every time this component content has been checked for changes.'
    );
  }

  // ngAfterViewInit is called once after the component's view
  // has been initialized
  // It is used to perform any additional initialization tasks
  // that depend on the view being present.
  // It is a good place to put any logic that needs to run
  // once the view is available.
  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      "Runs once after the component's view has been initialized."
    );
  }

  // ngAfterViewChecked is called after the component's view
  // has been checked for changes
  // It is used to respond to changes in the view
  // and update the component accordingly.
  // It is a good place to put any logic that needs to run
  // whenever the view changes.
  // Be careful when using ngAfterViewChecked as it can be called frequently
  // and can impact performance if not used judiciously.
  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      "Runs every time the component's view has been checked for changes."
    );
  }

  // ngOnDestroy is called once before the component is destroyed
  // It is used to perform any cleanup tasks
  // such as unsubscribing from observables or removing event listeners.
  // It is a good place to put any logic that needs to run
  // just before the component is removed from the DOM.
  ngOnDestroy() {
    log('ngOnDestroy', '	Runs once before the component is destroyed.');
  }

  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRender',
      'Runs once the next time that all components have been rendered to the DOM.'
    );
  });

  // afterRender = afterRender(() => {
  //   log(
  //     'afterRender',
  //     'Runs every time all components have been rendered to the DOM.'
  //   );
  // });
}
