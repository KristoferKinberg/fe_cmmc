import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  actionUpdateDraft,
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

const defaultSettings = { size: "3", centerComponent: true, maxHeight: "100%" };

export default ({ settings, children, component, overrideStyles, entry: entity }) => {
  const id = 1; // TODO THIS IS A TEMP, PLEASE REMOVE ASAP: 2020/01/19
  const dispatch = useDispatch();
  const { draft, original, dirtyDraft } = useSelector(({ admin }) => admin.draftData || {});
  const settingsObj = { ...settings, ...defaultSettings };

  React.useEffect(() => {
      isNew()
        ? dispatch(actionPrepNewDraft(entity))
        : dispatch(actionRequestSpecific(entity, id));

      return () => dispatch({ type: ADMIN_CLEAR_DRAFT });
    },
    []);

  /**
   * Checks if we are creating a new or editing an existing one
   * @returns {boolean}
   */
  const isNew = () => {
    if (draft) return !('id' in draft);
    return id === 'new';
  };

  /**
   * Callback for updating draft
   * @param key
   * @returns {function(*=)}
   */
  const updateDraft = key => value => {
    dispatch(actionUpdateDraft({ ...draft, [key]: value }));
  };

  /**
   * Setup children if data is available
   * @returns {any}
   */
  const setupSidebar = () => draft
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
      child, {
        inputValue: draft[child.props.responsibility],
        callBack: updateDraft(child.props.responsibility)
      }
    )
    : null
  );

  /**
   * Reset draft
   */
  const resetDraft = () => dispatch(actionUpdateDraft(original, false));

  /**
   * Save draft
   * @returns {*}
   */
  const saveDraft = () => isNew()
    ? dispatch(actionSaveNew(entity, draft))
    : dispatch(actionSaveEdit(entity, draft));

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
    return <Component data={draft} />
  };

  /**
   * Set up main component
   * @returns {any}
   */
  const renderComponent = () =>  draft
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