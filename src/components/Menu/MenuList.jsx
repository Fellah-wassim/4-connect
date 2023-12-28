import { Link } from "react-router-dom";

function MenuList() {
  return (
    <ul className="w-[100%] list-none text-2xl max-sm:text-base flex flex-col gap-5">
      <Link to="human-vs-bot">
        <button className="w-full">
          <div className="flex justify-center items-center gap-3">
            <span className="flex justify-center items-center gap-2">
              <>Player</>
              <>
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7384 14.4455C14.7236 14.4455 16.4428 13.7334 17.8474 12.3285C19.2521 10.9239 19.9641 9.20523 19.9641 7.21973C19.9641 5.23481 19.2521 3.51597 17.8472 2.11084C16.4423 0.706413 14.7234 -0.00561523 12.7384 -0.00561523C10.7528 -0.00561523 9.03407 0.706413 7.62947 2.11108C6.22487 3.51574 5.51254 5.23464 5.51254 7.21973C5.51254 9.20523 6.22481 10.9241 7.6297 12.3288C9.0346 13.7332 10.7535 14.4455 12.7384 14.4455ZM25.3815 23.0628C25.3409 22.4783 25.259 21.8406 25.1384 21.1673C25.0166 20.4888 24.8599 19.8475 24.6722 19.2613C24.4783 18.6555 24.2147 18.0572 23.8888 17.4838C23.5504 16.8888 23.1531 16.3706 22.7072 15.9442C22.241 15.4981 21.6702 15.1395 21.0101 14.8778C20.3523 14.6176 19.6233 14.4858 18.8435 14.4858C18.5372 14.4858 18.2411 14.6114 17.6691 14.9838C17.2625 15.2486 16.8547 15.5115 16.4457 15.7725C16.0528 16.0229 15.5204 16.2575 14.8628 16.4699C14.2212 16.6775 13.5699 16.7828 12.9269 16.7828C12.284 16.7828 11.6328 16.6775 10.9906 16.4699C10.3337 16.2577 9.80135 16.0232 9.40878 15.7727C8.95351 15.4818 8.54159 15.2163 8.18429 14.9835C7.613 14.6112 7.31658 14.4855 7.01037 14.4855C6.23031 14.4855 5.50159 14.6176 4.84399 14.8781C4.18435 15.1392 3.61329 15.4979 3.1466 15.9444C2.70099 16.371 2.30344 16.8889 1.96559 17.4838C1.63992 18.0572 1.37625 18.6552 1.18213 19.2616C0.994632 19.8477 0.837894 20.4888 0.716137 21.1673C0.595493 21.8397 0.513579 22.4776 0.473033 23.0635C0.432698 23.6532 0.412706 24.244 0.413091 24.835C0.413091 26.4011 0.910902 27.6688 1.89258 28.6038C2.86212 29.5265 4.14497 29.9945 5.70502 29.9945H20.1502C21.7103 29.9945 22.9926 29.5267 23.9624 28.6038C24.9443 27.6695 25.4421 26.4015 25.4421 24.8348C25.4419 24.2304 25.4216 23.6341 25.3815 23.0628Z"
                    fill="white"
                  />
                </svg>
              </>
            </span>
            <>VS</>
            <span className="flex justify-center items-center gap-2">
              <>AI Bot</>
              <>
                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9592 12.9979V8.81634C27.9592 8.07078 27.6538 7.35575 27.11 6.82856C26.5662 6.30137 25.8287 6.00519 25.0597 6.00519H16.3609V4.16108C16.5815 3.97131 16.7597 3.73968 16.8844 3.48052C17.009 3.22135 17.0776 2.94015 17.0857 2.6543C17.0939 2.36844 17.0415 2.084 16.9318 1.81855C16.822 1.5531 16.6574 1.31229 16.4479 1.11098C16.1437 0.816498 15.7564 0.615994 15.3348 0.534796C14.9132 0.453598 14.4762 0.495347 14.0791 0.654771C13.682 0.814195 13.3425 1.08414 13.1035 1.43052C12.8645 1.7769 12.7367 2.18417 12.7364 2.60089C12.7364 3.22216 13.0191 3.77595 13.4613 4.16108V6.00519H4.76248C3.99346 6.00519 3.25594 6.30137 2.71216 6.82856C2.16838 7.35575 1.86288 8.07078 1.86288 8.81634V13.0303L1.7585 13.0373C1.39299 13.0625 1.05093 13.2212 0.801269 13.4812C0.551605 13.7413 0.412893 14.0834 0.413086 14.4386V17.2498C0.413086 17.6226 0.565832 17.9801 0.837722 18.2437C1.10961 18.5073 1.47837 18.6554 1.86288 18.6554V25.6832C1.86288 26.4288 2.16838 27.1438 2.71216 27.671C3.25594 28.1982 3.99346 28.4944 4.76248 28.4944H25.0597C25.8287 28.4944 26.5662 28.1982 27.11 27.671C27.6538 27.1438 27.9592 26.4288 27.9592 25.6832V18.6554C28.3438 18.6554 28.7125 18.5073 28.9844 18.2437C29.2563 17.9801 29.409 17.6226 29.409 17.2498V14.5258C29.4258 14.3076 29.3901 14.0887 29.3047 13.8863C29.0118 13.2003 28.384 13.0359 27.9592 12.9979ZM7.66208 14.4386C7.66208 12.8869 8.63634 11.6275 9.83677 11.6275C11.0372 11.6275 12.0115 12.8869 12.0115 14.4386C12.0115 15.9904 11.0372 17.2498 9.83677 17.2498C8.63634 17.2498 7.66208 15.9904 7.66208 14.4386ZM20.7074 22.8721C19.2561 22.8679 9.11187 22.8721 9.11187 22.8721V20.0609C9.11187 20.0609 19.2619 20.0581 20.7132 20.0609L20.7074 22.8721ZM19.9854 17.2498C18.7849 17.2498 17.8107 15.9904 17.8107 14.4386C17.8107 12.8869 18.7849 11.6275 19.9854 11.6275C21.1858 11.6275 22.1601 12.8869 22.1601 14.4386C22.1601 15.9904 21.1858 17.2498 19.9854 17.2498Z"
                    fill="white"
                  />
                </svg>
              </>
            </span>
          </div>
        </button>
      </Link>

      <Link to="bot1-vs-bot2">
        <button className="w-full">
          <div className="flex justify-center items-center gap-3">
            <span className="flex justify-center items-center gap-2">
              <>AI Bot1</>
              <>
                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9592 12.9979V8.81634C27.9592 8.07078 27.6538 7.35575 27.11 6.82856C26.5662 6.30137 25.8287 6.00519 25.0597 6.00519H16.3609V4.16108C16.5815 3.97131 16.7597 3.73968 16.8844 3.48052C17.009 3.22135 17.0776 2.94015 17.0857 2.6543C17.0939 2.36844 17.0415 2.084 16.9318 1.81855C16.822 1.5531 16.6574 1.31229 16.4479 1.11098C16.1437 0.816498 15.7564 0.615994 15.3348 0.534796C14.9132 0.453598 14.4762 0.495347 14.0791 0.654771C13.682 0.814195 13.3425 1.08414 13.1035 1.43052C12.8645 1.7769 12.7367 2.18417 12.7364 2.60089C12.7364 3.22216 13.0191 3.77595 13.4613 4.16108V6.00519H4.76248C3.99346 6.00519 3.25594 6.30137 2.71216 6.82856C2.16838 7.35575 1.86288 8.07078 1.86288 8.81634V13.0303L1.7585 13.0373C1.39299 13.0625 1.05093 13.2212 0.801269 13.4812C0.551605 13.7413 0.412893 14.0834 0.413086 14.4386V17.2498C0.413086 17.6226 0.565832 17.9801 0.837722 18.2437C1.10961 18.5073 1.47837 18.6554 1.86288 18.6554V25.6832C1.86288 26.4288 2.16838 27.1438 2.71216 27.671C3.25594 28.1982 3.99346 28.4944 4.76248 28.4944H25.0597C25.8287 28.4944 26.5662 28.1982 27.11 27.671C27.6538 27.1438 27.9592 26.4288 27.9592 25.6832V18.6554C28.3438 18.6554 28.7125 18.5073 28.9844 18.2437C29.2563 17.9801 29.409 17.6226 29.409 17.2498V14.5258C29.4258 14.3076 29.3901 14.0887 29.3047 13.8863C29.0118 13.2003 28.384 13.0359 27.9592 12.9979ZM7.66208 14.4386C7.66208 12.8869 8.63634 11.6275 9.83677 11.6275C11.0372 11.6275 12.0115 12.8869 12.0115 14.4386C12.0115 15.9904 11.0372 17.2498 9.83677 17.2498C8.63634 17.2498 7.66208 15.9904 7.66208 14.4386ZM20.7074 22.8721C19.2561 22.8679 9.11187 22.8721 9.11187 22.8721V20.0609C9.11187 20.0609 19.2619 20.0581 20.7132 20.0609L20.7074 22.8721ZM19.9854 17.2498C18.7849 17.2498 17.8107 15.9904 17.8107 14.4386C17.8107 12.8869 18.7849 11.6275 19.9854 11.6275C21.1858 11.6275 22.1601 12.8869 22.1601 14.4386C22.1601 15.9904 21.1858 17.2498 19.9854 17.2498Z"
                    fill="white"
                  />
                </svg>
              </>
            </span>
            <>VS</>
            <span className="flex justify-center items-center gap-2">
              <>AI Bot 2</>
              <>
                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9592 12.9979V8.81634C27.9592 8.07078 27.6538 7.35575 27.11 6.82856C26.5662 6.30137 25.8287 6.00519 25.0597 6.00519H16.3609V4.16108C16.5815 3.97131 16.7597 3.73968 16.8844 3.48052C17.009 3.22135 17.0776 2.94015 17.0857 2.6543C17.0939 2.36844 17.0415 2.084 16.9318 1.81855C16.822 1.5531 16.6574 1.31229 16.4479 1.11098C16.1437 0.816498 15.7564 0.615994 15.3348 0.534796C14.9132 0.453598 14.4762 0.495347 14.0791 0.654771C13.682 0.814195 13.3425 1.08414 13.1035 1.43052C12.8645 1.7769 12.7367 2.18417 12.7364 2.60089C12.7364 3.22216 13.0191 3.77595 13.4613 4.16108V6.00519H4.76248C3.99346 6.00519 3.25594 6.30137 2.71216 6.82856C2.16838 7.35575 1.86288 8.07078 1.86288 8.81634V13.0303L1.7585 13.0373C1.39299 13.0625 1.05093 13.2212 0.801269 13.4812C0.551605 13.7413 0.412893 14.0834 0.413086 14.4386V17.2498C0.413086 17.6226 0.565832 17.9801 0.837722 18.2437C1.10961 18.5073 1.47837 18.6554 1.86288 18.6554V25.6832C1.86288 26.4288 2.16838 27.1438 2.71216 27.671C3.25594 28.1982 3.99346 28.4944 4.76248 28.4944H25.0597C25.8287 28.4944 26.5662 28.1982 27.11 27.671C27.6538 27.1438 27.9592 26.4288 27.9592 25.6832V18.6554C28.3438 18.6554 28.7125 18.5073 28.9844 18.2437C29.2563 17.9801 29.409 17.6226 29.409 17.2498V14.5258C29.4258 14.3076 29.3901 14.0887 29.3047 13.8863C29.0118 13.2003 28.384 13.0359 27.9592 12.9979ZM7.66208 14.4386C7.66208 12.8869 8.63634 11.6275 9.83677 11.6275C11.0372 11.6275 12.0115 12.8869 12.0115 14.4386C12.0115 15.9904 11.0372 17.2498 9.83677 17.2498C8.63634 17.2498 7.66208 15.9904 7.66208 14.4386ZM20.7074 22.8721C19.2561 22.8679 9.11187 22.8721 9.11187 22.8721V20.0609C9.11187 20.0609 19.2619 20.0581 20.7132 20.0609L20.7074 22.8721ZM19.9854 17.2498C18.7849 17.2498 17.8107 15.9904 17.8107 14.4386C17.8107 12.8869 18.7849 11.6275 19.9854 11.6275C21.1858 11.6275 22.1601 12.8869 22.1601 14.4386C22.1601 15.9904 21.1858 17.2498 19.9854 17.2498Z"
                    fill="white"
                  />
                </svg>
              </>
            </span>
          </div>
        </button>
      </Link>
      <div>
        <button className="w-full">
          <div className="flex gap-2 justify-center">
            <>GAME RULES</>
            <svg
              width="24"
              height="30"
              viewBox="0 0 24 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.48458 11.7801H20.4851V16.6015H5.48458V11.7801ZM0.127441 28.9229V29.0087C0.164951 29.2877 0.304553 29.5429 0.519267 29.7249C0.733981 29.907 1.00856 30.003 1.28994 29.9944H22.0917C22.2338 29.9944 22.3701 29.9379 22.4705 29.8375C22.571 29.737 22.6274 29.6007 22.6274 29.4587V27.8515H1.19887C0.91471 27.8515 0.642187 27.9644 0.441256 28.1653C0.240324 28.3663 0.127441 28.6388 0.127441 28.9229Z"
                fill="white"
              />
              <path
                d="M23.6989 26.2444V0.530099C23.6989 0.388019 23.6424 0.251758 23.542 0.151292C23.4415 0.0508259 23.3052 -0.00561523 23.1632 -0.00561523L1.73458 -0.00561523C1.30834 -0.00561523 0.89956 0.163708 0.598163 0.465106C0.296765 0.766504 0.127441 1.17529 0.127441 1.60153L0.127441 27.0678C0.452845 26.8788 0.822566 26.7795 1.19887 26.7801H23.1632C23.3052 26.7801 23.4415 26.7237 23.542 26.6232C23.6424 26.5227 23.6989 26.3865 23.6989 26.2444ZM15.6632 3.74439C15.6632 3.46022 15.776 3.1877 15.977 2.98677C16.1779 2.78584 16.4504 2.67296 16.7346 2.67296H17.806C17.9481 2.67296 18.0844 2.7294 18.1848 2.82986C18.2853 2.93033 18.3417 3.06659 18.3417 3.20867C18.3417 3.35075 18.2853 3.48701 18.1848 3.58748C18.0844 3.68794 17.9481 3.74439 17.806 3.74439H16.7346V4.81581H17.2703C17.4124 4.81581 17.5486 4.87225 17.6491 4.97272C17.7496 5.07319 17.806 5.20945 17.806 5.35153C17.806 5.49361 17.7496 5.62987 17.6491 5.73034C17.5486 5.8308 17.4124 5.88724 17.2703 5.88724H16.7346V6.95867H17.806C17.9481 6.95867 18.0844 7.01511 18.1848 7.11558C18.2853 7.21604 18.3417 7.3523 18.3417 7.49439C18.3417 7.63647 18.2853 7.77273 18.1848 7.87319C18.0844 7.97366 17.9481 8.0301 17.806 8.0301H16.7346C16.4504 8.0301 16.1779 7.91722 15.977 7.71629C15.776 7.51535 15.6632 7.24283 15.6632 6.95867V3.74439ZM12.4489 3.20867C12.4489 3.06659 12.5053 2.93033 12.6058 2.82986C12.7062 2.7294 12.8425 2.67296 12.9846 2.67296C13.1267 2.67296 13.2629 2.7294 13.3634 2.82986C13.4639 2.93033 13.5203 3.06659 13.5203 3.20867V6.95867H14.056C14.1981 6.95867 14.3344 7.01511 14.4348 7.11558C14.5353 7.21604 14.5917 7.3523 14.5917 7.49439C14.5917 7.63647 14.5353 7.77273 14.4348 7.87319C14.3344 7.97366 14.1981 8.0301 14.056 8.0301H13.5203C13.2361 8.0301 12.9636 7.91722 12.7627 7.71629C12.5618 7.51535 12.4489 7.24283 12.4489 6.95867V3.20867ZM8.16316 3.20867C8.16316 3.06659 8.2196 2.93033 8.32006 2.82986C8.42053 2.7294 8.55679 2.67296 8.69887 2.67296C8.84095 2.67296 8.97721 2.7294 9.07768 2.82986C9.17814 2.93033 9.23458 3.06659 9.23458 3.20867V6.42296C9.23458 6.56504 9.29103 6.7013 9.39149 6.80176C9.49196 6.90223 9.62822 6.95867 9.7703 6.95867C9.91238 6.95867 10.0486 6.90223 10.1491 6.80176C10.2496 6.7013 10.306 6.56504 10.306 6.42296V3.20867C10.306 3.06659 10.3625 2.93033 10.4629 2.82986C10.5634 2.7294 10.6996 2.67296 10.8417 2.67296C10.9838 2.67296 11.1201 2.7294 11.2205 2.82986C11.321 2.93033 11.3774 3.06659 11.3774 3.20867V6.42296C11.3774 6.8492 11.2081 7.25798 10.9067 7.55938C10.6053 7.86078 10.1965 8.0301 9.7703 8.0301C9.34406 8.0301 8.93528 7.86078 8.63388 7.55938C8.33248 7.25798 8.16316 6.8492 8.16316 6.42296V3.20867ZM2.2703 25.173C2.2703 25.315 2.21386 25.4513 2.11339 25.5518C2.01293 25.6522 1.87666 25.7087 1.73458 25.7087C1.5925 25.7087 1.45624 25.6522 1.35578 25.5518C1.25531 25.4513 1.19887 25.315 1.19887 25.173V6.95867C1.19887 6.81659 1.25531 6.68033 1.35578 6.57986C1.45624 6.4794 1.5925 6.42296 1.73458 6.42296C1.87666 6.42296 2.01293 6.4794 2.11339 6.57986C2.21386 6.68033 2.2703 6.81659 2.2703 6.95867V25.173ZM2.2703 4.81581C2.2703 4.95789 2.21386 5.09415 2.11339 5.19462C2.01293 5.29509 1.87666 5.35153 1.73458 5.35153C1.5925 5.35153 1.45624 5.29509 1.35578 5.19462C1.25531 5.09415 1.19887 4.95789 1.19887 4.81581V2.13724C1.19887 1.99516 1.25531 1.8589 1.35578 1.75843C1.45624 1.65797 1.5925 1.60153 1.73458 1.60153C1.87666 1.60153 2.01293 1.65797 2.11339 1.75843C2.21386 1.8589 2.2703 1.99516 2.2703 2.13724V4.81581ZM3.87744 7.49439V3.74439C3.87744 3.46022 3.99032 3.1877 4.19126 2.98677C4.39219 2.78584 4.66471 2.67296 4.94887 2.67296H5.48458C5.81434 2.67152 6.13648 2.772 6.40695 2.96064C6.67742 3.14928 6.88301 3.41687 6.99559 3.72682C7.10817 4.03676 7.12224 4.37392 7.03589 4.69217C6.94953 5.01042 6.76696 5.29422 6.51316 5.50474C6.88373 5.89828 7.0906 6.41812 7.09173 6.95867V7.49439C7.09173 7.63647 7.03529 7.77273 6.93482 7.87319C6.83435 7.97366 6.69809 8.0301 6.55601 8.0301C6.41393 8.0301 6.27767 7.97366 6.17721 7.87319C6.07674 7.77273 6.0203 7.63647 6.0203 7.49439V6.95867C6.0203 6.67451 5.90742 6.40199 5.70648 6.20106C5.50555 6.00012 5.23303 5.88724 4.94887 5.88724V7.49439C4.94887 7.63647 4.89243 7.77273 4.79196 7.87319C4.6915 7.97366 4.55524 8.0301 4.41316 8.0301C4.27108 8.0301 4.13481 7.97366 4.03435 7.87319C3.93388 7.77273 3.87744 7.63647 3.87744 7.49439ZM16.7346 24.1015H9.23458C9.0925 24.1015 8.95624 24.0451 8.85578 23.9446C8.75531 23.8442 8.69887 23.7079 8.69887 23.5658C8.69887 23.4237 8.75531 23.2875 8.85578 23.187C8.95624 23.0865 9.0925 23.0301 9.23458 23.0301H16.7346C16.8767 23.0301 17.0129 23.0865 17.1134 23.187C17.2139 23.2875 17.2703 23.4237 17.2703 23.5658C17.2703 23.7079 17.2139 23.8442 17.1134 23.9446C17.0129 24.0451 16.8767 24.1015 16.7346 24.1015ZM18.3417 21.423H7.62744C7.48536 21.423 7.3491 21.3665 7.24863 21.2661C7.14817 21.1656 7.09173 21.0293 7.09173 20.8872C7.09173 20.7452 7.14817 20.6089 7.24863 20.5084C7.3491 20.408 7.48536 20.3515 7.62744 20.3515H18.3417C18.4838 20.3515 18.6201 20.408 18.7205 20.5084C18.821 20.6089 18.8774 20.7452 18.8774 20.8872C18.8774 21.0293 18.821 21.1656 18.7205 21.2661C18.6201 21.3665 18.4838 21.423 18.3417 21.423ZM21.556 16.6015C21.556 16.8857 21.4431 17.1582 21.2422 17.3591C21.0413 17.5601 20.7687 17.673 20.4846 17.673H5.48458C5.20042 17.673 4.9279 17.5601 4.72697 17.3591C4.52604 17.1582 4.41316 16.8857 4.41316 16.6015V11.7801C4.41316 11.4959 4.52604 11.2234 4.72697 11.0225C4.9279 10.8216 5.20042 10.7087 5.48458 10.7087H20.4846C20.7687 10.7087 21.0413 10.8216 21.2422 11.0225C21.4431 11.2234 21.556 11.4959 21.556 11.7801V16.6015ZM21.0203 4.81581C21.4465 4.81581 21.8553 4.98514 22.1567 5.28653C22.4581 5.58793 22.6274 5.99672 22.6274 6.42296C22.6274 6.8492 22.4581 7.25798 22.1567 7.55938C21.8553 7.86078 21.4465 8.0301 21.0203 8.0301H19.9489C19.8068 8.0301 19.6705 7.97366 19.5701 7.87319C19.4696 7.77273 19.4132 7.63647 19.4132 7.49439C19.4132 7.3523 19.4696 7.21604 19.5701 7.11558C19.6705 7.01511 19.8068 6.95867 19.9489 6.95867H21.0203C21.1624 6.95867 21.2986 6.90223 21.3991 6.80176C21.4996 6.7013 21.556 6.56504 21.556 6.42296C21.556 6.28088 21.4996 6.14462 21.3991 6.04415C21.2986 5.94368 21.1624 5.88724 21.0203 5.88724C20.5941 5.88724 20.1853 5.71792 19.8839 5.41652C19.5825 5.11512 19.4132 4.70634 19.4132 4.2801C19.4132 3.85386 19.5825 3.44508 19.8839 3.14368C20.1853 2.84228 20.5941 2.67296 21.0203 2.67296H22.0917C22.2338 2.67296 22.3701 2.7294 22.4705 2.82986C22.571 2.93033 22.6274 3.06659 22.6274 3.20867C22.6274 3.35075 22.571 3.48701 22.4705 3.58748C22.3701 3.68794 22.2338 3.74439 22.0917 3.74439H21.0203C20.8782 3.74439 20.742 3.80083 20.6415 3.90129C20.541 4.00176 20.4846 4.13802 20.4846 4.2801C20.4846 4.42218 20.541 4.55844 20.6415 4.65891C20.742 4.75937 20.8782 4.81581 21.0203 4.81581Z"
                fill="white"
              />
              <path
                d="M6.02016 4.2801C6.02016 4.13802 5.96372 4.00176 5.86325 3.90129C5.76279 3.80083 5.62653 3.74438 5.48444 3.74438H4.94873V4.81581H5.48444C5.62653 4.81581 5.76279 4.75937 5.86325 4.65891C5.96372 4.55844 6.02016 4.42218 6.02016 4.2801Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
      </div>
    </ul>
  );
}

export default MenuList;
