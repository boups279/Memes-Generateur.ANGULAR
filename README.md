# MemesGenerateur

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


                    <!-- dynamic-form.component.html -->
                    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="mt-2">
                        <div formArrayName="fields">
                            <div *ngFor="let field of fields.controls; let i = index">
                                <div class="d-flex">
                                    <div class="col-10">
                                        <input [formControlName]="i" placeholder="Texte {{i+1}}" class="form-control"
                                            id="exampleInputEmail1" aria-describedby="emailHelp">
                                    </div>
                                    <div class="col-1 ms-2">
                                        <button (click)="removeField(i)" class="btn btn-outline-danger"
                                            type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <p class="d-inline-flex gap-1">
                                    <!-- Italique -->
                                    <button (click)="toggleItalic()" class="btn" data-bs-toggle="button"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            fill="currentColor" class="bi bi-type-italic" viewBox="0 0 16 16">
                                            <path
                                                d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
                                        </svg>
                                    </button>
                                    <!-- Gras -->
                                    <button (click)="toggleBold()" type="button" class="btn" data-bs-toggle="button">
                                        <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 32 32" id="text">
                                            <path
                                                d="M6 24h20v6H6zm6.4-6h7.2l1.4 4h4L18 2h-4L7 22h4l1.4-4zM16 7.714 18.2 14h-4.4L16 7.714z">
                                            </path>
                                        </svg>
                                    </button>

                                    <button type="button" class="btn" data-bs-toggle="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 16 16" id="Text">
                                            <path fill="#422e18"
                                                d="M12.5 4.9c-1.4 0-2.5.8-2.6.9l1.2 1.6s.7-.5 1.4-.5c1.4 0 1.5 1.2 1.5 1.6-.4-.1-1.1-.3-2-.1-1.4.3-2.8 2-2.1 3.9.7 1.8 3.1 2.1 4.1.6v1h2V8.6c0-2.7-1.9-3.7-3.5-3.7zm-1 6.5C11.4 9.5 13 9.5 14 9.6v1c0 1.2-2.3 2.3-2.5.8zM6.9 14H9L5.8 2H3.1L0 14h2.1l1-4h2.7l1.1 4zM3.6 8l.8-3.2.9 3.2H3.6z"
                                                class="color444444 svgShape"></path>
                                        </svg>
                                    </button>


                                    <!-- Augmenter taille -->
                                    <button (click)="increaseFontSize()" type="button" class="btn btn-outline-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 16 16" id="Plus">
                                            <g fill="none" fill-rule="evenodd" stroke="#000000" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2"
                                                class="colorStroke000000 svgStroke">
                                                <path d="M8 1v14M1 8h14" fill="#422e18" class="color000000 svgShape">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                    <!-- Diminuer taille -->
                                    <button (click)="decreaseFontSize()" type="button" class="btn btn-outline-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 64 64" id="Remove">
                                            <line x2="64" y1="32" y2="32" fill="none" stroke="#422e18"
                                                stroke-miterlimit="10" stroke-width="4"
                                                class="colorStroke010101 svgStroke">
                                            </line>
                                        </svg>

                                    </button>
                                    <button type="button" class="btn btn-outline-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 8 8"
                                            id="Reload">
                                            <path
                                                d="M4 0C1.8 0 0 1.8 0 4s1.8 4 4 4c1.1 0 2.12-.43 2.84-1.16l-.72-.72c-.54.54-1.29.88-2.13.88-1.66 0-3-1.34-3-3s1.34-3 3-3c.83 0 1.55.36 2.09.91L4.99 3h3V0L6.8 1.19C6.08.47 5.09 0 3.99 0z"
                                                fill="#422e18" class="color000000 svgShape"></path>
                                        </svg>

                                    </button>

                                    <button (click)="setRotateLeft()">Pivoter à gauche</button>
                                    <button (click)="setRotateRight()">Pivoter à droite</button>
                                    <button (click)="toggleCase()">{{ authService.textTransform === 'uppercase' ?
                                        'Minuscule' : 'Majuscule' }}</button>


                                    <input type="color" (change)="onColorChange($event)"
                                        value="{{authService.textColor}}" />

                                </p>

                                <button (click)="clearText()">Effacer le texte</button>

                            </div>
                        </div>
                        <div class="d-grid gap-2 col-11 mt-4">
                            <button (click)="addField()" class="btn btn-outline-success" type="button">Ajouter
                                texte</button>
                        </div>
                    </form>
