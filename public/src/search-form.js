import { renderBlock } from './lib.js';
export function renderSearchFormBlock(checkInDate, checkOutDate) {
    const formatDate = (date) => {
        const y = date.getFullYear();
        const m = date.getMonth() + 1;
        const d = date.getDate();
        return `${y}-${(m < 10) ? ('0' + m) : m}-${(d < 10) ? ('0' + d) : d}`;
    };
    const minDate = new Date(checkInDate);
    minDate.setDate(minDate.getDate() - 1);
    const maxDate = new Date(checkInDate);
    maxDate.setMonth(maxDate.getMonth() + 2);
    maxDate.setDate(0);
    console.log('cur:', formatDate(minDate));
    console.log('in: ', formatDate(checkInDate));
    console.log('out: ', formatDate(checkOutDate));
    console.log('max: ', formatDate(maxDate));
    renderBlock('search-form-block', `
    <form>
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
            <input id="check-in-date" type="date" value="${formatDate(checkInDate)}" min="${formatDate(minDate)}" max="${formatDate(maxDate)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${formatDate(checkOutDate)}" min="${formatDate(minDate)}" max="${formatDate(maxDate)}" name="checkout" />
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
