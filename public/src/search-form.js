import { renderBlock } from './lib.js';
export function renderSearchFormBlock(arrivalDate, departureDate) {
    const date = new Date();
    const minDate = new Date().toISOString().split("T")[0];
    const maxDate = new Date(date.getFullYear(), date.getMonth() + 2, 0)
        .toISOString()
        .split("T")[0];
    const nextDay = (arrivalDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2)
        .toISOString()
        .split("T")[0]);
    const departureDay = (departureDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 4)
        .toISOString()
        .split("T")[0]);
    renderBlock("search-form-block", `
    <form class="searchForm" type="submit">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${arrivalDate}" min="${minDate}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departureDate}" min="${nextDay}" max="${departureDay}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
