@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">

                        <todo-item></todo-item>
                        <todo-add-form></todo-add-form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
