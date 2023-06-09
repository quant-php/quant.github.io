---
id: accessortrait
title: AccessorTrait
slug: /packages/quant/core/trait/accessortrait
---

Reference

## Definition
Namespace: `Quant\Core\Trait`

`AccessorTrait` provides accessor automation for object properties attributed with `#[Setter]` and/or `#[Getter]`.

```php
trait AccessorTrait
```

## Example

```php 
use Quant\Core\Trait\AccessorTrait;
use Quant\Core\Attribute\Setter;
use Quant\Core\Attribute\Getter;

class Employee {

    use AccessorTrait;

    #[Setter] #[Getter]
    private string $name = "John Smith";

    public function __construct(
        #[Getter]
        private string $empId
    ) {
    }
}

$employee = new Employee("87i-dsd-89z-978");
$employe->getEmpId(); // returns "87i-dsd-89z-978"
$employe->setName("Thomas Anderson")->getName(); // returns "Thomas Anderson"
```

## Getter/Setter automation

:::note
In the following, the word `Accessor` is used both for accessors and mutators, commonly referred to as `getters` and `setters`.
:::

`Quant/Core/Trait/AccessorTrait` provides accessors to object properties attributed with `#[Setter]`
and/or `#[Getter]`.

### `#[Getter]` and `#[Setter]` Attributes

```php title=Example
use Quant\Core\Trait\AccessorTrait;
use Quant\Core\Attribute\Setter;
use Quant\Core\Attribute\Getter;

class Target 
{
    use AccessorTrait;
  
    #[Setter] #[Getter] private string $value = "";
}

$target = new Target();
$target->setValue("new value")->getValue(); // "new value"
```

When `#[Setter]` and/or `#[Getter]` are used, `get`, `set` and `is` methods will be available with an object instance
whose class uses these annotations _(sic!)_.

Such attributes may be configured for a class or its properties and/or its constructor parameters when using **constructor property promotion**.


#### Getters
Getters are available for properties using the `#[Getter]` attribute. Except for `boolean`-values, a `getter` is always prefixed with
`get`. `boolean` values can be queried using the prefix `is`:

```php title=Getters
use Quant\Core\Trait\AccessorTrait;
use Quant\Core\Attribute\Getter;
class Target 
{
    use AccessorTrait;
  
    #[Getter] private string $value = "default";
    #[Getter] private bool $valid = true;
}

$target = new Target();
$target->getValue(); // "default"
$target->isValid(); // true
```

#### Setters and Guards
The return value of a `set`-method provided with `AccessorTrait` will always be the owning instance.

To use invariants with `setters`, each `setter` has an `apply`-method that guards the property. If implemented, its return value
will be used as the new value for the property. This allows for applying validation and coercion logic without accidentally
breaking the `AccessorTrait`'s interface.

```php title="Setters and Guards"
use Quant\Core\Trait\AccessorTrait;
use Quant\Core\Attribute\Setter;

class Target 
{
    use AccessorTrait;
  
    #[Setter] private string $value = "";

    protected function applyValue(string $value): string
    {
        return $value === "" ? $this->value : $value;
    }
}

$target = new Target();
$target->setValue("new value")->setValue("")->getValue(); // "new value"
```

#### Using the guards with `__construct`
If an object requires the guards to be used with [constructor arguments](#constructor-property-promotion), the method `AccessorTrait::applyProperties()`
can be used:

```php title="Calling guards with the constructor"
use Quant\Core\Trait\AccessorTrait;
use Quant\Core\Attribute\Setter;

class Target 
{
    use AccessorTrait;
    
    public function __construct(
        private string $a,
        #[Setter]
        private string $b
    ) {
        $this->applyProperties([1 => $b]);
    }

    protected function applyB(string $value): mixed 
    {
        echo "Called by the constructor.";
        return $value;
    }
}
```

`AccessorTrait::applyProperties(array $args)` configures the properties of **this** class with the values available in `$args`.
The ordinal value of the individual entries in `$args` is expected to match the ordinal value of the parameter
that is to be configured with the value, so it treats the arguments positionally: To use an argument
for `$b` with the following constructor

`__construct($a = null, $b = null)`

an array in the form of

`$args = [1 => "value_of_b"]`

must be passed to `applyProperties`

:::tip
Argument inspection can be leveraged to the `AccessorTrait` by applying `applyProperties()` to the return value
of `func_get_args()`:

```php
$this->applyProperties(func_get_args());
```
:::


### Constructor Property Promotion
The `AccessorTrait` considers constructor parameters used with **Constructor Property Promotion**. Configuring the attributes
directly on constructor parameters greatly reduces boilerplate code:

 ```php title="Constructor Property Promotion"
use Quant\Core\Trait\AccessorTrait;
use Quant\Core\Attribute\Setter;
 
class Target 
{
     use AccessorTrait;

     public function __construct(
          #[Setter] #[Getter]
          public string $value,
          #[Setter]
          private bool $state
      ) {
     {
     }
 }
```

### Attribute Configuration

#### Access-level modifiers
`#[Getter]` and `#[Setter]` can be configured with access-level modifiers. To do so, import the `Modifier`-enum from
the package `Quant\Core\Lang\Modifer`, and pass the required modifier as an argument to the accessor:

```php
use Quant\Core\Attribute\Setter;
use Quant\Core\Lang\Modifier;

#[Getter(Modifier::PROTECTED)]
class A 
{
    // ...
```

The visibility of the methods provided by the `AccessorTrait` correspond to the particular modifier. The default
modifier, if none is provided, is `Quant\Core\Lang\Modifier\Modifier::PUBLIC`.

##### Available modifier
The `quant`-modifier semantically correspond to language level modifier.

- `Quant\Core\Lang\Modifier::PRIVATE`
- `Quant\Core\Lang\Modifier::PROTECTED`
- `Quant\Core\Lang\Modifier::PUBLIC`

```php title="access-level modifiers"
use Quant\Core\Trait\AccessorTrait;
use Quant\Core\Attribute\Setter;
use Quant\Core\Attribute\Getter;
use Quant\Core\Lang\Modifier;

class A 
{
     use AccessorTrait;

     public function __construct(
          public string $value,
          #[Getter(Modifier::PROTECTED)]
          private bool $state,
          #[Getter(Modifier::PRIVATE)]
          private bool $valid
      ) {
     {
     }
     
     public function proxyIsValid(): bool
     {
         return $this->isValid();
     }
 }
 

class B extends A 
{
    public function proxyIsState(): bool
    {
        return $this->isState();
    }
} 

$a = new A("value", true, false);
$a->isValid(); // BadMethodCallException
$a->proxyIsValid(); // false

$a = new B("value", true, false);
$b->isState(); // BadMethodCallException
$b->proxyIsState();// true 
```

### Attributes on class-level
`#[Setter]` and `#[Getter]` can also be used on class-level:

 ```php title="class-level setters and getters"
use Quant\Core\Trait\AccessorTrait;
use Quant\Core\Attribute\Setter;
use Quant\Core\Attribute\Getter;

#[Setter] #[Getter]
class Target 
{
     use AccessorTrait;

     public function __construct(
          #Setter[Modifier::PRIVATE]  
          public string $value,
          private bool $state
      ) {
     {
     }
 }
```

`#[Getter]` / `#[Setter]` on property level override class-level attribute configuration.

In the example above, `setters` and `getters` for `$value` and `$state` are available, but `setValue()` is configured
with a private access modifier.

## Remarks
- If the target already contains `setters` and `getters` matching the naming conventions used by the `AccessorTrait`,
  handling of these methods will default to the owning object, and not the `AccessorTrait`. This also applies to
  the [`applyProperties`](#setters-and-guards)-method.
- Once the `AccessorTrait` is `used`  by a class, subclasses of the hosting class inherit the functionality of the `AccessorTrait` and
  do not need to redeclare the trait with their class-definition to use `#[Getter]` / `#[Setter]` attributes.
- Static Code Analyzis Support is available with [quant/phpstan](/docs/packages/quant/phpstan)

## Performance Considerations

The implementation requires logic and information to be evaluated at runtime, since getters / setters are only virtually existing, not physically: This affects performance to a certain degree.

In tests, the following functionality of the `AccessorTrait` proved to have an impact on runtime performance:

1. Using the Reflection API to query properties and classes for properties.
2. Deciding whether an callee's accessor is accessible based on the modifier-configuration of the attribute.
3. Scoping function calls from the class that hosts the trait to the classes that declare the property. E.g., if the property is declared private, the owning class must be determined and used as the scope when setting the property.

For futher details and benachmarks refer to [this article](https://thorsten.suckow-homberg.de/docs/articles/getter-setter-automation-with-php-attributes/#5-performance-considerations).

## Resources

* A writeup and closer look at the `AccessorTrait` can be found at [https://thorsten.suckow-homberg.de](https://thorsten.suckow-homberg.de/docs/articles/getter-setter-automation-with-php-attributes)