import React from 'react'
import MainRouter from './main/MainRouter'
const components = {

};

function Main(props) {
  return (
    <main className="main">
      <ol className="breadcrumb">
        윗쪽에 메뉴 메뉴 - 이건 reducer에서 가져와야 함
      </ol>
      <div className="container-fluid">
        <div className="animated fadeIn">
          <MainRouter />
        </div>
      </div>
    </main>
  )
}

export default Main