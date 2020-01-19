import React from 'react';
import { useDispatch } from "react-redux";
import {
  CompOverviewHeader,
  HeaderTitle,
  StyledComponentOverview,
  StyledComponentWrap,
  StyledOverviewComponent,
  StyledOverviewStatusBar
} from "./StyledComponentOverview";
import EditBar from "../../../components/EditBar";
import AddButton from "../../../components/AddButton";
import OverviewModal from "../OverviewModal";
import {EyeOff} from "react-feather";
import UseGetEntityData from "../../../effects/useGetEntityData";
import UseGetEntities from "../../../effects/useGetEntitites";
import {actionRequestRemoveEntity} from "../../../stores/entities/entitiesActions";

export default ({ entity, title, component, width = 3 }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const [idForRemoval, setIdForRemoval] = React.useState(null);

  console.log(showModal);

  UseGetEntityData({ entity });
  const { [entity]: data } = UseGetEntities([entity]);

  /**
   * Edit component
   * @param id
   * @returns {function(): *}
   */
  // const editComponent = id => () => history.push(`${match.url}${id}`);
  const editComponent = () => {};

  /**
   * Hide modal
   */
  const hideModal = () => setShowModal(false);

  /**
   * Add component
   * @returns {*}
   */
  // const addComponent = () => history.push(`${match.url}new`);
  const addComponent = () => {};

  /**
   * Remove item
   */
  const removeItem = () => {
    //dispatch({ type: 'DELETE', origin: entity, id: idForRemoval,  isAdmin: true });
    console.log(':D')
    dispatch(actionRequestRemoveEntity(entity, idForRemoval));
    setShowModal(false);
    setIdForRemoval(null);
  };

  /**
   * Open remove modal
   * @param id
   * @returns {Function}
   */
  const openRemoveModal = id => () => {
    setIdForRemoval(id);
    setShowModal(true);
  };

  /**
   * Render modal
   * @returns {*}
   */
  const renderModal = () => <OverviewModal
    isActive={showModal}
    closeModal={hideModal}
    removeCallback={removeItem}
    text={idForRemoval}
  />;

  /**
   * Render header
   * @returns {*}
   */
  const renderHeader = () => {
    return <CompOverviewHeader>
      <HeaderTitle>
        { title }
      </HeaderTitle>

      <AddButton callBack={addComponent}/>
    </CompOverviewHeader>
  };

  /**
   * Render hidden icon
   * @param isShowing
   * @returns {null}
   */
  const renderHidden = isHidden => isHidden
    ? <EyeOff size={18}/>
    : null;

  /**
   * Render components
   * @returns {*}
   */
  const renderComponents = () => {
    const Component = component;
    const editBarConf = {
      add: false,
      update: true,
      remove: true
    };

    /**
     * Is hidden
     * @param speaker
     * @returns {boolean}
     */
    // const isHidden = data => data.reveal_date !== null && new Date(data.reveal_date).getTime() > new Date().getTime();
    const isHidden = data => false;

    console.log(data);

    return data
      ? Object.values(data).map(item =>
        <StyledComponentWrap key={item.id} className={`col-${width}`}>
          <StyledOverviewComponent>
            <StyledOverviewStatusBar>
              { renderHidden(isHidden(item)) }
            </StyledOverviewStatusBar>
            <Component {...item} isAdmin={true}/>
          </StyledOverviewComponent>

          <EditBar
            id={ item.id }
            configure={ editBarConf }
            editEvent={ editComponent(item.id) }
            removeEvent={ openRemoveModal(item.id) }
          />
        </StyledComponentWrap>
      )
      : null;
  };

  return <StyledComponentOverview>
    { renderModal() }
    { renderHeader() }
    <div className="row">
      { renderComponents() }
    </div>
  </StyledComponentOverview>;
};
