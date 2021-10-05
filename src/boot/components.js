import RmButtonBack from 'src/components/generic/button/RmButtonBack.vue';
import RmButtonColor from 'src/components/generic/button/RmButtonColor.vue';
import RmButtonText from 'src/components/generic/button/RmButtonText.vue';
import RmButtonSubmit from 'src/components/generic/button/RmButtonSubmit.vue';

import RmHashtagInput from 'src/components/generic/form/typeInput/RmHashtagInput.vue';

import RmForm from 'src/components/generic/form/RmForm.vue';
import RmImageCarousel from 'src/components/generic/form/RmImageCarousel.vue';
import RmInput from 'src/components/generic/form/RmInput.vue';
import RmRowButtons from 'src/components/generic/form/RmRowButtons.vue';
import RmUploader from 'src/components/generic/form/RmUploader.vue';

import RmCardSubtitle from 'src/components/generic/card/RmCardSubtitle.vue';
import RmCardTitle from 'src/components/generic/card/RmCardTitle.vue';

import RmDialog from 'src/components/generic/dialog/RmDialog.vue';
import RmDialogCard from 'src/components/generic/dialog/RmDialogCard.vue';
import RmDialogTitle from 'src/components/generic/dialog/RmDialogTitle.vue';

import RmCard from 'src/components/generic/layout/RmCard.vue';
import RmIconSticky from 'src/components/generic/layout/RmIconSticky.vue';
import RmPage from 'src/components/generic/layout/RmPage.vue';
import RmTabPanels from 'src/components/generic/layout/RmTabPanels.vue';
import RmTab from 'src/components/generic/layout/RmTab.vue';
import RmTabs from 'src/components/generic/layout/RmTabs.vue';

export default async ({ Vue }) => {
  Vue.component('RmButtonBack', RmButtonBack);
  Vue.component('RmButtonColor', RmButtonColor);
  Vue.component('RmButtonText', RmButtonText);
  Vue.component('RmButtonSubmit', RmButtonSubmit);

  Vue.component('RmHashtagInput', RmHashtagInput);

  Vue.component('RmImageCarousel', RmImageCarousel);
  Vue.component('RmInput', RmInput);
  Vue.component('RmForm', RmForm);
  Vue.component('RmRowButtons', RmRowButtons);
  Vue.component('RmUploader', RmUploader);

  Vue.component('RmCardTitle', RmCardTitle);
  Vue.component('RmCardSubtitle', RmCardSubtitle);

  Vue.component('RmDialog', RmDialog);
  Vue.component('RmDialogCard', RmDialogCard);
  Vue.component('RmDialogTitle', RmDialogTitle);

  Vue.component('RmCard', RmCard);
  Vue.component('RmIconSticky', RmIconSticky);
  Vue.component('RmPage', RmPage);
  Vue.component('RmTabPanels', RmTabPanels);
  Vue.component('RmTab', RmTab);
  Vue.component('RmTabs', RmTabs);
};
