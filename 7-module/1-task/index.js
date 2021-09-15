import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = createElement(this._ribbonTemplate());
    this._ribbonInner = this.elem.querySelector('.ribbon__inner');
    this._currentSlideId;

    this._targetSlideToggle(categories.length > 0 ? categories[0].id : '');
    this._initScrollMenu();
    this._categorySelectEvent();
  }

  _ribbonTemplate() {
    const arrowTemplate = type => {
      return `
            <button class="ribbon__arrow ribbon__arrow_${type} ${type === 'right' ? 'ribbon__arrow_visible' : ''}" data-side=${type}>
              <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </button>
          `;
    };

    const innerTemplate = categories => {
      return `
            <nav class="ribbon__inner">
              ${categories.map(category => linkTemplateCategory(category)).join('')}
            </nav>
          `;
    };

    const linkTemplateCategory = category => {
      return `
            <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
          `;
    };

    return `
        <div class="ribbon">
          ${arrowTemplate('left')}
          ${innerTemplate(this.categories)}
          ${arrowTemplate('right')}
        </div>
      `;
  }

  _initScrollMenu() {
    const onArrowClick = event => {
      const step = 350;
      const coeff = event.target.closest('.ribbon__arrow').dataset.side === 'left' ? -1 : 1;

      this._ribbonInner.scrollBy(coeff * step, 0);
    };

    const arrowsToggleHandler = () => {
      const arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
      const arrowRight = this.elem.querySelector('.ribbon__arrow_right');

      let scrollLeft = this._ribbonInner.scrollLeft;
      if (scrollLeft < 1) arrowLeft.classList.remove('ribbon__arrow_visible');
      else arrowLeft.classList.add('ribbon__arrow_visible');

      let scrollWidth = this._ribbonInner.scrollWidth;
      let clientWidth = this._ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if (scrollRight < 1) arrowRight.classList.remove('ribbon__arrow_visible');
      else arrowRight.classList.add('ribbon__arrow_visible');
    };

    const arrowsRibbon = this.elem.querySelectorAll('.ribbon__arrow');

    arrowsRibbon.forEach(arrow => arrow.addEventListener('click', onArrowClick));
    this._ribbonInner.addEventListener('scroll', arrowsToggleHandler);
  }

  _categorySelectEvent() {
    const onCategoryClick = (event) => {
      event.preventDefault();

      const categoryId = event.target.dataset.id;
      this._targetSlideToggle(categoryId);

      const onRibbonSelectEvent = new CustomEvent('ribbon-select', {
        detail: categoryId,
        bubbles: true
      });
      event.target.dispatchEvent(onRibbonSelectEvent);
    };

    const categoriesElements = this.elem.querySelectorAll('.ribbon__item');
    categoriesElements.forEach(item => item.addEventListener('click', onCategoryClick));
  }

  _targetSlideToggle(id) {
    const activeClass = 'ribbon__item_active';

    if (this._currentSlideId === id) return;

    if (this._currentSlideId !== undefined) {
      const currentActiveLink = this.elem.querySelector(`[data-id="${this._currentSlideId}"]`);
      currentActiveLink.classList.remove(activeClass);
    }

    const newActiveLink = this.elem.querySelector(`[data-id="${id}"]`);
    newActiveLink.classList.add(activeClass);
    this._currentSlideId = id;
  }
}