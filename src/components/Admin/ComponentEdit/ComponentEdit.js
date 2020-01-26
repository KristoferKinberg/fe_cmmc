import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionSaveEdit,
  actionSaveNew,
  actionPrepNewDraft,
  actionRequestSpecific,
  ADMIN_CLEAR_DRAFT
} from "../../../stores/admin/adminActions"
import {
  StyledComponentArea,
  StyledComponentEdit,
  StyledSidebar,
  StyledSidebarButtons,
  StyledSidebarContent,
  StyledSidebarHeader,
  StyledSidebarHeaderElem
} from "./StyledComponentEdit";
import Button from "../../../components/Button";
import {selectDraftPart, selectParamId} from "../../../selectors";
import {actionRequestGetEntity} from "../../../stores/entities/entitiesActions";
import {actionUpdateDraft} from "../../../stores/draft/draftActions";

const defaultSettings = { size: "3", centerComponent: true, maxHeight: "100%" };

export default ({ settings, children, component, overrideStyles, entity }) => {
  const dispatch = useDispatch();
  const id = useSelector(selectParamId);
  const { data, dirtyDraft } = useSelector(selectDraftPart);
  const settingsObj = { ...settings, ...defaultSettings };

  console.log(data);

  React.useEffect(() => {
      dispatch(actionRequestGetEntity(entity, id));
      return () => dispatch({ type: ADMIN_CLEAR_DRAFT });
    },
    []);

  /**
   * Checks if we are creating a new or editing an existing one
   * @returns {boolean}
   */
  const isNew = () => id === 'new';

  /**
   * Callback for updating draft
   * @param key
   * @returns {function(*=)}
   */
  const updateDraft = key => value => dispatch(actionUpdateDraft(key, value));

  /**
   * Setup children if data is available
   * @returns {any}
   */
  const setupSidebar = () => data
    ? <StyledSidebarContent>
      { cloneChildren() }
    </StyledSidebarContent>
    : null;

  /**
   * Clones children
   * @returns {any[]}
   */
  const cloneChildren = () => React.Children.map(children, child => child.props.responsibility
    ? React.cloneElement(
      child,
      {
        inputValue: data[child.props.responsibility],
        callBack: updateDraft(child.props.responsibility)
      }
    )
    : null
  );

  /**
   * Reset draft
   */
  const resetDraft = () => dispatch(actionUpdateDraft(false));

  /**
   * Save draft
   * @returns {*}
   */
  const saveDraft = () => isNew() // TODO: CAN REMOVE THIS, JUST SEND TO SAME AS WHEN GETTING A ENTITY, BACKEND WILL HANDLE IT.
    ? dispatch(actionSaveNew(entity, data))
    : dispatch(actionSaveEdit(entity, data));

  /**
   * Render button
   * @param label
   * @param type
   * @param callback
   * @returns {*}
   */
  const renderButton = (label, type, callback) => <div className="col-6">
    <Button
      label={label}
      type={type}
      fullWidth={true}
      callBack={callback}
      disabled={!dirtyDraft}
    />
  </div>;

  /**
   * Render sidebar
   * @returns {*}
   */
  const renderSidebar = () => {
    return (
      <StyledSidebar className={"col-" + settingsObj.size}>
        <StyledSidebarHeader>
          <StyledSidebarHeaderElem>
            Edit toolbar
          </StyledSidebarHeaderElem>
        </StyledSidebarHeader>

        { setupSidebar() }

        <StyledSidebarButtons>
            { renderButton('Save' ,'success', saveDraft)}
            { renderButton('Reset', 'danger', resetDraft)}
        </StyledSidebarButtons>
      </StyledSidebar>
    )
  };

  /**
   * Prepares the component
   * @returns {*}
   */
  const setupComponent = () => {
    const Component = component;
    return <Component {...data} />
  };

  /**
   * Set up main component
   * @returns {any}
   */
  const renderComponent = () =>  data
    ? setupComponent()
    : null;

  /**
   * Render component area
   * @returns {*}
   */
  const renderComponentArea = () => <StyledComponentArea centerComponent={settingsObj.centerComponent}>
    <div style={ overrideStyles }>
      { renderComponent() }
    </div>
  </StyledComponentArea>;

  return <StyledComponentEdit>
    { renderComponentArea() }
    { renderSidebar() }
  </StyledComponentEdit>;
};
