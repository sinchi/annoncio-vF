import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
class ContentProfile extends Component {
    render() {
        return(
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-xs-3 col-sm-5">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <FontAwesome name="user" size="5x" />
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">26</div>
                                        <div>Profil</div>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/edit-profile/${Meteor.userId()}`}>
                            <div className="panel-footer">
                                <span className="pull-left">Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-3 col-sm-5">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <FontAwesome name="flag" size="5x" />
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">26</div>
                                        <div>Annonces</div>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/my-annonces-list/${Meteor.userId()}`}>
                            <div className="panel-footer">
                                <span className="pull-left">Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-3 col-sm-5">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <FontAwesome name="search" size="5x"/>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">12</div>
                                        <div>Recherches</div>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/my-search/${Meteor.userId()}`}>
                            <div className="panel-footer">
                                <span className="pull-left">Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-3 col-sm-5">
                        <div className="panel panel-warning">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <FontAwesome name="shopping-bag" size="5x" />
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">124</div>
                                        <div>Boutiques</div>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/my-shops/${Meteor.userId()}`}>
                            <div className="panel-footer">
                                <span className="pull-left">Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-3 col-sm-5">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <FontAwesome name="envelope" size="5x" />
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">13</div>
                                        <div>Messages</div>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/my-messages/${Meteor.userId()}`}>
                            <div className="panel-footer">
                                <span className="pull-left">Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-3 col-sm-5">
                        <div className="panel panel-dafault">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <FontAwesome name="comments" size="5x" />
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">124</div>
                                        <div>Commentaires</div>
                                    </div>
                                </div>
                            </div>
                            <Link to={`/my-comments/${Meteor.userId()}`}>
                            <div className="panel-footer">
                                <span className="pull-left">Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                            </Link>
                        </div>
                    </div>
                
                
                
                </div>

                )
    }
}

export default ContentProfile;
