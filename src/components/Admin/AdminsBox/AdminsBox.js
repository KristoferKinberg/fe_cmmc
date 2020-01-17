import React from "react";
import {StyledAdminContainer, StyledAdminsRow, StyledInvitedButtons} from "./StyledAdminsBox";
import { Trash2, Send, PlusCircle } from 'react-feather';
import {useDispatch, useSelector} from "react-redux";
import {
  actionGetInvites,
  actionGetAdmins,
  actionInviteAdmin,
  actionRemoveInvited,
  actionRemoveAdmin,
  actionResendInvite
} from "../../../stores/admin/adminActions";
import {
  Tab,
  TabList,
  TabPanel,
  Tabs
} from "react-tabs";
import OverviewModal from "../OverviewModal";
import {
  AddButton, StyledBox,
  StyledBoxBody,
  StyledBoxHeader,
  StyledBoxHeaderTitle,
  StyledContent
} from "../../../views/admin/AdminHome/StyledHome";

const AdminsBox = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.admin.admins);
  const invited = useSelector(state => state.admin.invited);

  const [ adminModalActive, setAdminModalActive ] = React.useState(false);
  const [ invitedModalActive, setInvitedModalActive ] = React.useState(false);

  const [ adminData, setAdminData ] = React.useState({ id: null, email: null });
  const [ invitedData, setInvitedData ] = React.useState({ id: null, email: null });

  React.useEffect(() => {
    dispatch(actionGetAdmins());
    dispatch(actionGetInvites());
  }, []);

  /**
   * Activate admin modal
   * @param usr
   * @returns {Function}
   */
  const activateAdminModal = usr => () => {
    setAdminData(usr);
    setAdminModalActive(true);
  };

  /**
   * Activate invite modal
   * @param usr
   * @returns {Function}
   */
  const activateInvitedModal = usr => () => {
    setInvitedData(usr);
    setInvitedModalActive(true);
  };

  /**
   * Close admin modal
   */
  const closeAdminModal = () => {
    setAdminData({ id: null, email: null });
    setAdminModalActive(false);
  };

  /**
   * Close invited modal
   */
  const closeInvitedModal = () => {
    setInvitedData({ id: null, email: null });
    setInvitedModalActive(false);
  };

  /**
   * Remove admin
   * @param id
   * @returns {function()}
   */
  const removeAdmin = () => {
    dispatch(actionRemoveAdmin(adminData.id));
    setAdminModalActive(false);
    setAdminData({ id: null, email: null });
  };

  /**
   * Remove invite
   * @param id
   * @returns {function()}
   */
  const removeInvited = () => {
    dispatch(actionRemoveInvited(invitedData.id));
    setInvitedModalActive(false);
    setInvitedData({ id: null, email: null });
  };

  /**
   * Resend invite
   * @param id
   * @returns {function()}
   */
  const resendInvite = id => () => dispatch(actionResendInvite(id));

  /**
   * Render users buttons
   * @param id
   * @returns {*}
   */
  const renderUsersButtons = usr => <Trash2 size={16} onClick={activateAdminModal(usr)}/>;

  /**
   * Render invited buttons
   * @param id
   * @returns {*}
   */
  const renderInvitedButtons = usr => <StyledInvitedButtons>
    <Send size={16} onClick={resendInvite(usr.id)}/>
    <Trash2 size={16} onClick={activateInvitedModal(usr)}/>
  </StyledInvitedButtons>;

  /**
   * Render users
   * @param usr
   * @param buttons
   * @returns {null}
   */
  const renderUsers = (usr, buttons) => usr
    ? Object.values(usr).map(({ email, id }) => <StyledAdminsRow key={email}>
      { email }
      { buttons({id, email }) }
    </StyledAdminsRow>)
    : null;

  /**
   * Invite user
   */
  const inviteUser = () => {
    const email = prompt("Enter the new admins email");
    if (!email) return;

    dispatch(actionInviteAdmin(email));
  };

  return <StyledBox>
    <StyledBoxHeader>
      <StyledBoxHeaderTitle>
        Admins
      </StyledBoxHeaderTitle>

      <AddButton>
        <PlusCircle color='#fff' size="27" onClick={inviteUser}/>
      </AddButton>
    </StyledBoxHeader>

    <StyledBoxBody>
      <StyledContent>
        <Tabs>
          <TabList>
            <Tab>Admins</Tab>
            <Tab>Invited</Tab>
          </TabList>

          <TabPanel>
            <StyledAdminContainer>
              { renderUsers(users, renderUsersButtons ) }
            </StyledAdminContainer>
          </TabPanel>
          <TabPanel>
            <StyledAdminContainer>
              { renderUsers(invited, renderInvitedButtons ) }
            </StyledAdminContainer>
          </TabPanel>
        </Tabs>
      </StyledContent>
    </StyledBoxBody>

    <OverviewModal
      isActive={adminModalActive}
      closeModal={closeAdminModal}
      removeCallback={removeAdmin}
      text={adminData.email}
    />

    <OverviewModal
      isActive={invitedModalActive}
      closeModal={closeInvitedModal}
      removeCallback={removeInvited}
      text={invitedData.email}
    />
  </StyledBox>;
};

export default AdminsBox;
