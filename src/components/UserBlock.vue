<template>
    <div class="user-block">
        <div class="user-block__header user-header">
            <div class="time">
                <span>{{ currentDate }}</span>
                <span>{{ currentTime }}</span>
            </div>
            <div class="log-out" @click="$router.push(`${'/login'}`)">
                <span>Выход</span>
                <svg
                        :class="{ 'log-out__icon': true, active: isActive }"
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            d="M11.4444 47H42.5556C45.0067 47 47 45.0067 47
          42.5556V33.6667H42.5556V42.5556H11.4444V11.4444H42.5556V20.3333H47V11.4444C47 8.99333 45.0067 7 42.5556
          7H11.4444C8.99333 7 7 8.99333 7 11.4444V42.5556C7 45.0067 8.99555 47 11.4444 47Z"
                    />
                    <path d="M29.1538 18L18 27L29.1538 36V29.2477H47V24.7477H29.1538V18Z"/>
                </svg>
            </div>
        </div>

        <div class="toggler" @click="addClass">
      <span class="toggler__line">
        <svg
                :class="{ toggler__sun: true, active: isActive }"
                width="79"
                height="79"
                viewBox="0 0 79 79"
                xmlns="http://www.w3.org/2000/svg"
        >
          <path
                  class="sun"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.5004 7.8999C39.548 7.8999 40.5527 8.31606 41.2935 9.05683C42.0342 9.7976 42.4504 10.8023 42.4504 11.8499V15.7999C42.4504 16.8475 42.0342 17.8522 41.2935 18.593C40.5527 19.3337 39.548 19.7499 38.5004 19.7499C37.4528 19.7499 36.4481 19.3337 35.7073 18.593C34.9666 17.8522 34.5504 16.8475 34.5504 15.7999V11.8499C34.5504 10.8023 34.9666 9.7976 35.7073 9.05683C36.4481 8.31606 37.4528 7.8999 38.5004 7.8999ZM54.3004 39.4999C54.3004 43.6903 52.6358 47.7091 49.6727 50.6722C46.7096 53.6353 42.6908 55.2999 38.5004 55.2999C34.31 55.2999 30.2912 53.6353 27.3281 50.6722C24.365 47.7091 22.7004 43.6903 22.7004 39.4999C22.7004 35.3095 24.365 31.2907 27.3281 28.3276C30.2912 25.3645 34.31 23.6999 38.5004 23.6999C42.6908 23.6999 46.7096 25.3645 49.6727 28.3276C52.6358 31.2907 54.3004 35.3095 54.3004 39.4999ZM52.4676 59.0524L55.2602 61.8451C56.0052 62.5646 57.003 62.9627 58.0387 62.9537C59.0744 62.9447 60.0651 62.5293 60.7974 61.7969C61.5298 61.0646 61.9452 60.0739 61.9542 59.0382C61.9632 58.0025 61.5651 57.0047 60.8455 56.2598L58.0529 53.4671C57.3079 52.7476 56.3101 52.3494 55.2745 52.3584C54.2388 52.3674 53.2481 52.7829 52.5157 53.5152C51.7833 54.2476 51.3679 55.2383 51.3589 56.274C51.3499 57.3096 51.7481 58.3074 52.4676 59.0524ZM60.8416 17.1548C61.5821 17.8955 61.9981 18.9 61.9981 19.9474C61.9981 20.9948 61.5821 21.9993 60.8416 22.7401L58.0529 25.5327C57.6885 25.91 57.2527 26.2109 56.7707 26.4179C56.2888 26.6249 55.7705 26.7339 55.246 26.7384C54.7215 26.743 54.2014 26.6431 53.716 26.4444C53.2305 26.2458 52.7895 25.9525 52.4186 25.5817C52.0478 25.2108 51.7545 24.7698 51.5558 24.2843C51.3572 23.7989 51.2573 23.2787 51.2618 22.7543C51.2664 22.2298 51.3754 21.7115 51.5824 21.2296C51.7894 20.7476 52.0903 20.3118 52.4676 19.9474L55.2602 17.1548C56.001 16.4142 57.0055 15.9982 58.0529 15.9982C59.1003 15.9982 60.1048 16.4142 60.8455 17.1548H60.8416ZM66.1504 43.4499C67.198 43.4499 68.2027 43.0337 68.9435 42.293C69.6842 41.5522 70.1004 40.5475 70.1004 39.4999C70.1004 38.4523 69.6842 37.4476 68.9435 36.7068C68.2027 35.9661 67.198 35.5499 66.1504 35.5499H62.2004C61.1528 35.5499 60.1481 35.9661 59.4073 36.7068C58.6665 37.4476 58.2504 38.4523 58.2504 39.4999C58.2504 40.5475 58.6665 41.5522 59.4073 42.293C60.1481 43.0337 61.1528 43.4499 62.2004 43.4499H66.1504ZM38.5004 59.2499C39.548 59.2499 40.5527 59.6661 41.2935 60.4068C42.0342 61.1476 42.4504 62.1523 42.4504 63.1999V67.1499C42.4504 68.1975 42.0342 69.2022 41.2935 69.943C40.5527 70.6837 39.548 71.0999 38.5004 71.0999C37.4528 71.0999 36.4481 70.6837 35.7073 69.943C34.9666 69.2022 34.5504 68.1975 34.5504 67.1499V63.1999C34.5504 62.1523 34.9666 61.1476 35.7073 60.4068C36.4481 59.6661 37.4528 59.2499 38.5004 59.2499ZM18.9479 25.5327C19.3146 25.8997 19.7501 26.1909 20.2293 26.3896C20.7086 26.5883 21.2223 26.6907 21.7411 26.6909C22.2599 26.691 22.7737 26.589 23.2531 26.3906C23.7325 26.1923 24.1682 25.9014 24.5352 25.5347C24.9022 25.1679 25.1933 24.7325 25.392 24.2532C25.5908 23.774 25.6931 23.2603 25.6933 22.7415C25.6935 22.2226 25.5915 21.7088 25.3931 21.2294C25.1947 20.75 24.9039 20.3144 24.5371 19.9474L21.7405 17.1548C20.9956 16.4352 19.9978 16.0371 18.9621 16.0461C17.9264 16.0551 16.9357 16.4705 16.2034 17.2029C15.471 17.9352 15.0556 18.9259 15.0466 19.9616C15.0376 20.9973 15.4357 21.9951 16.1552 22.7401L18.9479 25.5327ZM24.5332 59.0524L21.7405 61.8451C20.9956 62.5646 19.9978 62.9627 18.9621 62.9537C17.9264 62.9447 16.9357 62.5293 16.2034 61.7969C15.471 61.0646 15.0556 60.0739 15.0466 59.0382C15.0376 58.0025 15.4357 57.0047 16.1552 56.2598L18.9479 53.4671C19.6929 52.7476 20.6906 52.3494 21.7263 52.3584C22.762 52.3674 23.7527 52.7829 24.4851 53.5152C25.2174 54.2476 25.6329 55.2383 25.6419 56.274C25.6509 57.3096 25.2527 58.3074 24.5332 59.0524ZM14.8004 43.4499C15.848 43.4499 16.8527 43.0337 17.5935 42.293C18.3342 41.5522 18.7504 40.5475 18.7504 39.4999C18.7504 38.4523 18.3342 37.4476 17.5935 36.7068C16.8527 35.9661 15.848 35.5499 14.8004 35.5499H10.8504C9.80279 35.5499 8.79809 35.9661 8.05732 36.7068C7.31655 37.4476 6.90039 38.4523 6.90039 39.4999C6.90039 40.5475 7.31655 41.5522 8.05732 42.293C8.79809 43.0337 9.80279 43.4499 10.8504 43.4499H14.8004Z"
                  fill="#E6E6E6"
          />
        </svg>
      </span>
        </div>
        <div class="info">
            <p class="info__name">{{ person.name }}</p>
            <p class="info__date">{{ person.birthDate }}</p>
            <p class="info__text">{{ person.number }}</p>
            <p class="info__text">{{ person.profession }}</p>
        </div>

        <div class="user-panel">
            <UserItem
                    text="Инструктаж"
                    :progressValue="person.breefing"
                    :imageSrc="isActive ? breefingWhiteTheme : breefingDarkTheme"
                    progressName="breefing"
            />
            <UserItem
                    text="Предсменный экзаменатор"
                    :progressValue="person.examination"
                    :imageSrc="isActive ? testWhiteTheme : testDarkTheme"
                    progressName="exam"
            />
            <UserItem text="Тестов выполнено" :progressValue="person.tests.performedTests" progressClass="tests"
                      :percentValue="percentTests"/>
            <UserItem text="Аттестация через" :progressValue="person.atestationDays" progressClass="atistation"/>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex";
import UserItem from "./UserItem.vue";

export default {
    name: "UserBlock",
    components: {UserItem},
    computed: {
        ...mapState({
            person: (state) => state.person,
        }),
        percentTests() {
            return Math.ceil((this.person.tests.performedTests / this.person.tests.maxtests) * 100);
            // высчитывает процентное соотношение выполненных тестов к максимальным, чтобы использовать это значение при заполнении диаграммы.
        },


    },

    data() {
        return {
            currentDate: "",
            isActive: false,
            breefingDarkTheme: require("@/assets/images/breefing.svg"),
            testDarkTheme: require("@/assets/images/testing.svg"),
            breefingWhiteTheme: require("@/assets/images/breefingWhiteTheme.svg"),
            testWhiteTheme: require("@/assets/images/testingWhiteTheme.svg"),
        };
    },
    mounted() {
        this.getCurrentDateTime();
        setInterval(() => {
            this.getCurrentDateTime();
        }, 1000);
    },
    methods: {
        getCurrentDateTime() {
            const dateObj = new Date();
            const optionsDate = {day: "numeric", month: "numeric", year: "numeric"};
            const optionsTime = {hour: "2-digit", minute: "2-digit"};
            this.currentDate = dateObj.toLocaleDateString("ru-RU", optionsDate);
            this.currentTime = dateObj.toLocaleTimeString("ru-RU", optionsTime);
        },
        addClass() {
            this.isActive = !this.isActive;
            this.$emit("update-theme", this.isActive);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.info {

  width: 100%;
  height: 178px;
  background-color: $dark-theme-right;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 58px;
  border-radius: 4px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  &__name {
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
  }

  &__date {
    font-size: 24px;
    line-height: 29.26px;
  }

  &__text {
    font-size: 16px;
    line-height: 19.5px;
  }
}

.time {
  span {
    display: block;
  }
}

.user-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 58px;
}

.toggler {
  margin-bottom: 53px;
  display: flex;
  justify-content: flex-end;

  &__line {
    display: block;
    width: 76px;
    height: 20px;
    background-color: $dark-theme-main;
    border-radius: 10px;
    position: relative;
  }

  &__sun {
    position: absolute;
    left: -30px;
    top: -30px;
    cursor: pointer;
    transition: left 0.3s, fill 0.7s ease;

    path {
      fill: #e6e6e6;
    }

    &.active {
      left: 21px;

      path {
        fill: black;
      }
    }
  }
}

.log-out {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  column-gap: 10px;

  &__icon {
    transition: transform 0.2s ease;
    fill: #e6e6e6;

    &.active {
      fill: #000;
    }
  }

  &:hover {
    svg {
      transform: translateX(-3px);
    }
  }

  span {
    font-size: 24px;
  }
}

.user-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3%;
  //align-self: center;
  justify-items: center;
}

.user-block {
  width: 87%;
  height: 1080px;
  background-color: #353d54;
  padding: 30px 40px;
  border-radius: 0 20px 20px 0;
}

</style>
