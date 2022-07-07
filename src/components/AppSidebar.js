import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { AppSidebarNav } from './AppSidebarNav';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import navigation from '../_nav';

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      switcher="true"
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CContainer>
          <CRow>
            <CCol sm="auto">{localStorage.getItem('hName')}</CCol>
          </CRow>
        </CContainer>
        <CIcon className="sidebar-brand-full" height={65} />
        <CIcon className="sidebar-brand-narrow" height={65} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
