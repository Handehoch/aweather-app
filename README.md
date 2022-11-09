# Angular weather app

It's simple angular application, that shows current weather by latitude and longitude. You can put your query in fields.
Application uses Openweather API to get json data.

Application had deployed on vercel server.
[Weather app](https://aweather-app-handehoch.vercel.app/)

## Validation

There is a simple validation: 
  1) Field cannot be empty
  2) Query should be number
  3) Specific validation for latitude([-90; 90]) and longitude ([-180; 180])

## Additional weather data

Application also shows some additional info besides temperature:
  1) Feels like
  2) Wind speed
  3) Short description
  4) City
  5) Country code

## Weather icon

There is a situable icon near weather data.

## Creating and removing widgets

By pressing blue button you can create brand new weather widget with own form, map and button,
pressing red one will destroy last widget

## Map

Application is using Yandex API and [angular8-yandex-maps module](https://www.npmjs.com/package/angular8-yandex-maps)![aweather-app-handehoch vercel app_]

## Sample photo

![aweather-app-handehoch vercel app_](https://user-images.githubusercontent.com/95305283/200841531-7692399b-3ea9-430a-95ae-8fd4b9a2d559.png)


