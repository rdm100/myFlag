import React from 'react';
import './device.css';


class Device extends React.Component{



  render(){

    return (
      <div>
      <div>
      <p>{this.props.id}</p>
      <p>{this.props.name}</p>
      <p>{this.props.colour}</p>
      <button type="button"> change flag </button>
      </div>


      <div className="LEDsGrid">
      <ul class="LEDs">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      </ul>

      </div>
      </div>


    )
  }
}

export default Device;
