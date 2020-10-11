import axios from 'axios'

const state = {
    currentCity: 'Amsterdam'
};

const getters = {
    currentCity: state => state.currentCity
};

const mutations = {
    setCurrentCity: (state, payload) => (
        state.currentCity = payload
    ),
};

const actions = {
    async fetchUsers({ commit }) {
        const response = await axios.get("http://localhost:3000/users");
        commit("setUsers", response.data)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}