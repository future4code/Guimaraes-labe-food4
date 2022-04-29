export const goBack = (navigate) => {
    navigate(-1);}

export const goToHomePage = (navigate) => {
    navigate(`/`);
  }

  export const goToLoginPage = (navigate) => {
    navigate(`/LoginPage`);
  }

  export const goToSignUpPage = (navigate) => {
    navigate(`/SignUpPage`);
  }

  export const goToSignUpAddress = (navigate) => {
    navigate(`/SignUpAddress`);
  }

  export const goToRestaurantPage = (navigate, id) => {
    navigate(`/RestaurantPage${id}`);
  }

  export const goToOrderPage = (navigate) => {
    navigate(`/OrderPage`);
  }
  export const goToProfilePage = (navigate) => {
    navigate(`/ProfilePage`);
  }

  export const goToEditProfilePage = (navigate) => {
    navigate(`/EditProfilePage`);
  }

  export const goToEditAddressPage = (navigate) => {
    navigate(`/EditAddressPage`);
  }

