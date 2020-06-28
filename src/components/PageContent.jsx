import React from "react";

function PageContent() {
  return (
    <React.Fragment>
      <main className="page-content">
        <div className="container">
          <div>
            <div className="welcome">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="content">
                      <h2>Welcome to Dashboard</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="statistics">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <div className="box">
                      <i className="fa fa-envelope fa-fw bg-primary" />
                      <div className="info">
                        <h3>1,245</h3> <span>Emails</span>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="box">
                      <i className="fa fa-file fa-fw danger" />
                      <div className="info">
                        <h3>34</h3> <span>Projects</span>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="box">
                      <i className="fa fa-users fa-fw success" />
                      <div className="info">
                        <h3>5,245</h3> <span>Users</span>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="charts">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <div className="chart-container">
                      <h3>Chart</h3>
                      <canvas id="myChart" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="chart-container">
                      <h3>Chart2</h3>
                      <canvas id="myChart2" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default PageContent;
