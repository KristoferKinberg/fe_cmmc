import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  CompOverviewHeader,
  HeaderTitle,
  StyledComponentOverview,
  StyledComponentWrap,
  StyledOverviewComponent,
  StyledOverviewStatusBar
} from "./StyledComponentOverview";
import { withRouter } from 'react-router';
import {DELETE, MANY} from "../../../store/sagas";
import EditBar from "../../../components/EditBar";
import AddButton from "../../../components/AddButton";
import OverviewModal from "../OverviewModal";
import OverviewBar from "../OverviewBar";
import {EyeOff} from "react-feather";

export default withRouter(({ entry, title, component, width = 3, match, history }) => {
  const { activeYear } = useSelector(state => state.admin.entriesData[entry]);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const [idForRemoval, setIdForRemoval] = React.useState(null);

  React.useEffect(() => {
    dispatch({ type: MANY, origin: entry, isAdmin: true, providedYear: activeYear.year });
  }, []);

  const data = useSelector(state => state.admin.years[`_${activeYear.year}`][entry]);

  /**
   * Edit component
   * @param id
   * @returns {function(): *}
   */
  const editComponent = id => () => history.push(`${match.url}${id}`);

  /**
   * Hide modal
   */
  const hideModal = () => setShowModal(false);

  /**
   * Add component
   * @returns {*}
   */
  const addComponent = () => history.push(`${match.url}new`);

  /**
   * Remove item
   */
  const removeItem = () => {
    dispatch({ type: DELETE, origin: entry, id: idForRemoval, providedYear: activeYear.year, isAdmin: true });
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
    const isHidden = data => data.reveal_date !== null && new Date(data.reveal_date).getTime() > new Date().getTime();

    return data
      ? data.map(item =>
        <StyledComponentWrap key={item.id} className={`col-${width}`}>
          <StyledOverviewComponent>
            <StyledOverviewStatusBar>
              { renderHidden(isHidden(item)) }
            </StyledOverviewStatusBar>
            <Component data={item} isAdmin={true}/>
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
    <OverviewBar entry={entry}/>
    <div className="row">
      { renderComponents() }
    </div>
  </StyledComponentOverview>;
});
