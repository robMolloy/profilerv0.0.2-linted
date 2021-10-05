import cloneDeep from 'lodash/cloneDeep';
import buildObjectFromTemplate from '../utils/buildObjectFromTemplate';

class Model {
  constructor(props) {
    const { initData, name } = props;

    this.name = name;
    this.initData = initData;
  }

  fillTemplate(data) {
    return buildObjectFromTemplate(this.initData, data);
  }

  get blank() {
    return cloneDeep(this.initData);
  }
}
export default Model;
