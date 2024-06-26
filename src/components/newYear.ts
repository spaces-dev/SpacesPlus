import { logger, qs } from '../utils'

/**
 * ? Новогоднее печенье «Мерцающие ёлки»
 * * Новый год – это самый любимый праздник не только для детей, но и для взрослых.
 * * Готовится к этому яркому и долгожданному празднику мы начинаем заранее.
 * * Хочу предложить вам простой рецепт новогоднего печенья,
 * * которым можно украсить новогоднюю елку или подарить в красивой коробке в качестве подарка.
 *
 * ? Ингредиенты
 * * 300 г муки,
 * * 1 яйцо,
 * * 110 г. сливочного масла,
 * * 110 г. сахара,
 * * несколько капель ванильной эссенции,
 * * щепотка соли.
 *
 * ? Приготовление
 * * Взбейте в миске сливочное масло до мягкости,
 * * добавьте сахар и взбейте. Постепенно добавьте яйцо и ваниль.
 * * Просейте муку с солью, затем добавьте в тесто и мешайте, пока не получится мягкое тесто.
 * * Заверните его в плёнку и оставьте охлаждаться на 30 минут.
 * * Тесто раскатайте на посыпанном мукой столе в пласт толщиной 3-5 мм,
 * * вырежьте ёлочки, проделайте отверстия, переложите на противень, смазанный маслом,
 * * поставьте в разогретую до 190°С духовку и выпекайте 8-10 минут.
 * * Охладите, украсьте белой глазурью, шариками и проденьте в дырочку ленточку.
 *
 *!               #
 **              ***
 **             *****
 *?            *****~~
 *!             **~~~
 *?            *~~~***
 *!           ~~~******
 *?          ~~*********
 **         *************
 **          ***********
 **         *************
 **        ***************
 *?       *@***************
 *!      ***@************@**
 *?     *@****************@**
 *!       @****************
 *?      *******************
 *!     *****@***************
 **    ***********************
 **   ********@****************
 **  *****************@*********
 ** *****************************
 *             |||||
 *             |||||   _8_8_
 *             |||||  |  |  |_8_
 *             |||||  |__|__|___|
 */
export const newYear = () => {
  try {
    const logo = qs('.ico_logo_newyear')

    if (logo) {
      let key = 1

      setInterval(() => {
        logo.classList.replace(
          `ico_logo_newyear_${key}`,
          `ico_logo_newyear_${key > 5 ? 1 : key + 1}`
        )

        key++

        if (key > 6) key = 1
      }, 10000)
    }
  } catch (e) {
    logger.error('newYear', e)
  }
}
