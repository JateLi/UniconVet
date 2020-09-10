export const updateProductionList = () => {
    return {
        type: 'UPDATE_PRODUCTIONS',
        payload: products,
    }
}

export const addToCart = (newItem) => {
    return {
        type: 'ADD_NEW_ITEM',
        newItem,
    }
}

export const removeFromCart = (id) => {
    return {
      type: 'DELETE_ITME_BY_ID',
      id
    }
  }

  export const updateCartItem = (updateItem, updateId) => {
    return {
      type: 'UPDATE_SELECT_ITEM',
      updateItem, updateId
    }
  }

let products = [
    {
        id: 1,
        name: 'Sledgehammer',
        price: 125.76
    },
    {
        id: 2,
        name: 'Axe',
        price: 190.51
    },
    {
        id: 3,
        name: 'Bandsaw',
        price: 562.14
    },
    {
        id: 4,
        name: 'Chisel',
        price: 13.9
    },
    {
        id: 5,
        name: 'Hacksaw',
        price: 19.45
    },
    {
        id: 6,
        name: 'AxeBeta',
        price: 190.51
    },
    {
        id: 7,
        name: 'BandsawBeta',
        price: 562.14
    },
    {
        id: 8,
        name: 'ChiselBeta',
        price: 13.9
    },
    {
        id: 9,
        name: 'HacksawBeta',
        price: 19.45
    },
    {
        id: 10,
        name: 'TestTool',
        price: 19.4434343
    }
]